import { FC } from 'react';

interface IProps {
  docType: string;
  doc?: any;
}
export const SwiperCard: FC<IProps> = ({ docType }) => {
  //   const src = docType === 'job' ? doc.imgUrl : doc.avatar;
  return (
    <div className='swiper-card'>
      <img src='' alt='' />
      <div className='swiper-card__details'></div>
      <div className='swiper-card__actions'>
        <div className='swiper-card__deny'>
          <i className='material-icons'>cancel</i>
        </div>
        <div className='swiper-card__approve'>
          <i className='material-icons'>check_circle</i>
        </div>
      </div>
    </div>
  );
};
