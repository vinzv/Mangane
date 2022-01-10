import React from 'react';
import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import UploadProgressContainer from '../containers/upload_progress_container';
import UploadContainer from '../containers/upload_container';
import SensitiveButtonContainer from '../containers/sensitive_button_container';

export default class UploadForm extends ImmutablePureComponent {

  static propTypes = {
    mediaIds: ImmutablePropTypes.list.isRequired,
  };

  render() {
    const { mediaIds } = this.props;
    const classes = classNames('compose-form__uploads-wrapper', {
      'contains-media': mediaIds.size !== 0,
    });

    return (
      <div className='compose-form__upload-wrapper'>
        <UploadProgressContainer />

        <div className={classes}>
          {mediaIds.map(id => (
            <UploadContainer id={id} key={id} />
          ))}
        </div>

        {!mediaIds.isEmpty() && <SensitiveButtonContainer />}
      </div>
    );
  }

}
