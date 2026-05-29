self.addEventListener('push', event => {
  if (!event.data) return;

  let title = 'ADSB Radar';
  let body = '';

  try {
    const data = event.data.json();
    title = data.title || title;
    body  = data.body  || '';
  } catch {
    // Fallback: plain text
    body = event.data.text();
  }

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/adsb-radar/icon.png',
      tag: 'adsb-alert',
      renotify: true,
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://mortlord.github.io/adsb-radar/index.html')
  );
});
