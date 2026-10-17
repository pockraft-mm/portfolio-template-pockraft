import { ActionLink } from '../../components/ActionLink';
import { Badge } from '../../components/ui/badge';
import { useLandingPage } from '../../context/LandingPageContext';
import { Icon } from '../../factories/iconRegistry';

export function HeroSection() {
  const { hero } = useLandingPage();
  return <section className="hero section-border"><div className="container hero-inner">
    <Badge>{hero.label}</Badge><h1>{hero.title}</h1><p>{hero.description}</p>
    <div className="hero-actions"><ActionLink action={hero.primaryAction} showArrow /><ActionLink action={hero.secondaryAction} /></div>
    <div className="hero-signals">{hero.trustSignals.map((signal) => <span key={signal.label}><Icon name={signal.icon} size={15} /> {signal.label}</span>)}</div>
  </div></section>;
}
