import { Block } from 'components/about-us/Block';
import { GuestLayout } from 'layouts/GuestLayout';

const blocks = [
  {
    title: 'Unternehmen Konzepte',
    img: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae itaque deserunt unde vitae impedit? Ipsum, inventore omnis at provident ipsa culpa cum. Voluptate quam eveniet ut tempore expedita fugit ipsa! Quia enim ipsam omnis? Neque nesciunt aliquam architecto sequi accusantium, non, voluptatibus ullam at, rem illum veniam corrupti minima repellat commodi! Accusantium, obcaecati nulla. Dolor perspiciatis corporis rerum rem ut excepturi in, sapiente omnis harum hic est nulla commodi explicabo fugit nostrum quo quos repellat? Officiis maxime temporibus accusantium corrupti. Cumque excepturi, fugiat nobis nostrum maiores eveniet ipsa odio, tempora at asperiores expedita est quisquam quis ullam dolorum harum eligendi vitae laudantium fuga! Quidem autem, consequatur error praesentium, distinctio cum rerum dolorum labore sint et deserunt dolore voluptatibus aliquam dolor!',
  },
  {
    title: 'Diensleistung Beschreibung',
    img: 'https://images.unsplash.com/photo-1509130298739-651801c76e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae itaque deserunt unde vitae impedit? Ipsum, inventore omnis at provident ipsa culpa cum. Voluptate quam eveniet ut tempore expedita fugit ipsa! Quia enim ipsam omnis? Neque nesciunt aliquam architecto sequi accusantium, non, voluptatibus ullam at, rem illum veniam corrupti minima repellat commodi! Accusantium, obcaecati nulla. Dolor perspiciatis corporis rerum rem ut excepturi in, sapiente omnis harum hic est nulla commodi explicabo fugit nostrum quo quos repellat? Officiis maxime temporibus accusantium corrupti. Cumque excepturi, fugiat nobis nostrum maiores eveniet ipsa odio, tempora at asperiores expedita est quisquam quis ullam dolorum harum eligendi vitae laudantium fuga! Quidem autem, consequatur error praesentium, distinctio cum rerum dolorum labore sint et deserunt dolore voluptatibus aliquam dolor!',
  },
  {
    title: 'Unser Produkt Einleitung',
    img: 'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae itaque deserunt unde vitae impedit? Ipsum, inventore omnis at provident ipsa culpa cum. Voluptate quam eveniet ut tempore expedita fugit ipsa! Quia enim ipsam omnis? Neque nesciunt aliquam architecto sequi accusantium, non, voluptatibus ullam at, rem illum veniam corrupti minima repellat commodi! Accusantium, obcaecati nulla. Dolor perspiciatis corporis rerum rem ut excepturi in, sapiente omnis harum hic est nulla commodi explicabo fugit nostrum quo quos repellat? Officiis maxime temporibus accusantium corrupti. Cumque excepturi, fugiat nobis nostrum maiores eveniet ipsa odio, tempora at asperiores expedita est quisquam quis ullam dolorum harum eligendi vitae laudantium fuga! Quidem autem, consequatur error praesentium, distinctio cum rerum dolorum labore sint et deserunt dolore voluptatibus aliquam dolor!',
  },
];

export const AboutUs = () => {
  const list = blocks.map((b, i) => <Block key={i} b={b} />);
  return (
    <GuestLayout>
      <div className='about-us-screen'>{list}</div>;
    </GuestLayout>
  );
};
