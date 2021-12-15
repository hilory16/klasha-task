import Header from 'components/Header/index';
import { HeroWrapper, HeroContent } from './hero.style';

export default function Hero() {
  return (
    <HeroWrapper className="wrapper">
      <Header />
      <HeroContent></HeroContent>
    </HeroWrapper>
  );
}
