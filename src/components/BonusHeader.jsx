import copy2 from '../assets/images/walletPaymentIcons/copy2.svg';

const BonusHeader = () => {
  return (
    <>
      <div className="Header_bonusCode__T7ZiR" style={{ color: 'white' }}>
        <span style={{ marginRight: '5px' }}>Use Special Key</span>

        <span style={{ marginRight: '5px' }}>BDAG50</span>
        <span className="spanImage" style={{ marginRight: '5px' }}>
          <img
            alt="copy"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            data-nimg="1"
            src={copy2}
          />
        </span>
        <span>to receive 50% extra coins</span>
      </div>
    </>
  );
};

export default BonusHeader;
