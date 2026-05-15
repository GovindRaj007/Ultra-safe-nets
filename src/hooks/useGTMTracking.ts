import { useEffect } from 'react';

export const useGTMTracking = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if clicked element or its parent has data-track attribute
      let trackElement = target;

      if (!trackElement.hasAttribute('data-track')) {
        // Check parent elements up to 3 levels
        for (let i = 0; i < 3; i++) {
          trackElement = trackElement.parentElement as HTMLElement;
          if (!trackElement || trackElement.hasAttribute('data-track')) break;
        }
      }

      // If element has tracking enabled
      if (trackElement?.hasAttribute('data-track')) {
        const trackType = trackElement.getAttribute('data-track-type');
        const trackUrl = trackElement.getAttribute('data-track-url');

        // Push event to Google Tag Manager
        if (window.dataLayer && trackType && trackUrl) {
          window.dataLayer.push({
            event: 'click_tracking',
            click_type: trackType, // 'call' or 'whatsapp'
            click_url: trackUrl
          });
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
};
