  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  // Default consent
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  // Update on consent
  function allConsentGranted() {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
    loadAds();
  }

  // Delayed ad loading
  function loadAds() {
    setTimeout(() => {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }, 1000);
  }


  function allConsentGranted() {
    document.getElementById('consentBanner').style.display = 'none';
  }
  function hideConsent() {
    document.getElementById('consentBanner').style.display = 'blocked';
  }
