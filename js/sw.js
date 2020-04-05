(() => {
  if ('serviceWorker' in navigator) {
    console.log('支持');

    // 开始注册service workers
    navigator.serviceWorker.register('/sw-demo-cache.js', {
      scope: '/'
    }).then(function (registration) {
      console.log('注册成功');

          var serviceWorker;
          if (registration.installing) {
              serviceWorker = registration.installing;
              // $('#state').text('installing');
                    console.log('installing');
          } else if (registration.waiting) {
              serviceWorker = registration.waiting;
              // $('#state').text('waiting');
                    console.log('waiting');
          } else if (registration.active) {
              serviceWorker = registration.active;
                    console.log('active');
              // $('#state').text('active');
          }
          if (serviceWorker) {
              // $('#swState').text(serviceWorker.state);
              console.log(serviceWorker.state);
              // serviceWorker.addEventListener('statechange', function (e) {
              //   $('#swState').append('&emsp;状态变化为' + e.target.state);
              // });
          }
      }).catch (function (error) {
          console.log('注册没有成功');
          // $('#isSuccess').text('注册没有成功');
      });
  } else {
    console.log('不支持');
    // $('#isSupport').text('不支持');
  }
})();