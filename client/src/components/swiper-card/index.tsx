import { FC } from 'react';

interface IProps {
  docType: string;
  doc: any;
}
export const SwiperCard: FC<IProps> = ({ docType, doc }) => {
  const background =
    docType === 'job' ? `url(${doc.imgUrl})` : `url(${doc.avatar})`;

  return (
    <div className='swiper-card'>
      <div className='swiper-card__img' style={{ background }}></div>
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
