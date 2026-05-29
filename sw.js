self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'ADSB Radar', {
      body: data.body || '',
      icon: '/icon.png',
      badge: '/icon.png',
      tag: 'adsb-alert',
      renotify: true,
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://mortlord.github.io/adsb-radar/')
  );
});
