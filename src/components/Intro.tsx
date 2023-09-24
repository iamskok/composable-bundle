export const Intro = () => {
  const countryCode = (COUNTRY_CODE || '').trim();

  return (
    <div className="py-8 text-base leading-6 space-y-4 text-secondary-700 sm:text-lg sm:leading-7">
      <p>Welcome to {countryCode} POS!</p>
      <p>
        Embrace the future of retail with our cutting-edge solution designed to provide a
        seamless and efficient self-checkout experience. With our system, you can elevate
        your business by enhancing customer satisfaction, reducing wait times, and improving
        operational efficiency. Dive into the world of convenience and flexibility and lead
        your business to new heights!
      </p>
    </div>
  );
};
