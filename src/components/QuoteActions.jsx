import { SALES_EMAIL, SALES_PHONE } from '../utils/inventory';
import { getVariantConfig, trackExperimentClick } from '../utils/experiments';

const QuoteActions = ({ productName, locationTag }) => {
  const config = getVariantConfig();
  const sanitizedPhone = SALES_PHONE.replace(/[^0-9]/g, '');
  const encodedName = encodeURIComponent(productName || 'Product');

  const callButton = (
    <a
      href={`tel:${sanitizedPhone}`}
      className="btn btn-primary btn-small"
      onClick={() => trackExperimentClick('call_click', locationTag)}
    >
      {config.callCta}
    </a>
  );

  const emailButton = (
    <a
      href={`mailto:${SALES_EMAIL}?subject=Price inquiry for ${encodedName}`}
      className="btn btn-outline btn-small"
      onClick={() => trackExperimentClick('email_click', locationTag)}
    >
      {config.emailCta}
    </a>
  );

  const ordered = config.order[0] === 'email' ? [emailButton, callButton] : [callButton, emailButton];

  return (
    <div className="quote-actions-block">
      <div className="product-actions">{ordered}</div>
    </div>
  );
};

export default QuoteActions;
