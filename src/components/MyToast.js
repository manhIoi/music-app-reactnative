import React, {useEffect, useState} from 'react';
import Toast from 'react-native-root-toast';
import dimensitions from '../constants/dimensions';
import rootColor from '../constants/rootColor';

const MyToast = ({content}) => {
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isShowMessage) {
      console.log('b');
      setTimeout(() => {
        setIsShowMessage(false);
        console.log('c');
      }, 1000);
    }
  }, [isShowMessage]);

  useEffect(() => {
    if (content && !message) {
      setIsShowMessage(true);
      setMessage(content);
    }
  }, [content, message]);
  return (
    <Toast
      visible={isShowMessage}
      position={-dimensitions.heightTabbar - 10}
      backgroundColor={rootColor.whiteColor}
      textColor={rootColor.blackColor}
      opacity={1}
      hideOnPress={true}>
      {message}
    </Toast>
  );
};

export default MyToast;
