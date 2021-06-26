import React, {useEffect, useState} from 'react';
import Toast from 'react-native-root-toast';
import dimensitions from '../constants/dimensions';
import rootColor from '../constants/rootColor';

const MyToast = ({content, setContent}) => {
  const [isShowMessage, setIsShowMessage] = useState(false);

  useEffect(() => {
    if (isShowMessage) {
      setTimeout(() => {
        setIsShowMessage(false);
        setContent('');
      }, 1000);
    }
  }, [isShowMessage]);

  useEffect(() => {
    if (content) {
      setIsShowMessage(true);
    }
  }, [content]);
  return (
    <Toast
      visible={isShowMessage}
      position={-dimensitions.heightTabbar - 10}
      backgroundColor={rootColor.whiteColor}
      textColor={rootColor.blackColor}
      opacity={1}
      hideOnPress={true}>
      {content}
    </Toast>
  );
};

export default MyToast;
