import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { changeSetting, getSettings } from 'soapbox/actions/settings';
import ThemeToggle from './theme_toggle';

const mapStateToProps = state => {
  return {
    themeMode: getSettings(state).get('themeMode'),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onToggle(setting) {
    dispatch(changeSetting(['themeMode'], setting));
  },
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ThemeToggle));
