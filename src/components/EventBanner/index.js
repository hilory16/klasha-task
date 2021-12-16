import { EventBannerWrapper } from './eventBanner.style';

export default function EventBanner() {
  return (
    <EventBannerWrapper>
      <div className="text_area">
        <h3 className="widget_introduction">Good Morning, Eleanor</h3>
        <p className="description">
          Welcome to your daily event calendar. Here you can see all the upcoming events, meeting
          and create new events.
        </p>
      </div>

      <div className="button_container">
        <button>
          <span className="btn_text">+ Create event</span>
        </button>
      </div>
    </EventBannerWrapper>
  );
}
