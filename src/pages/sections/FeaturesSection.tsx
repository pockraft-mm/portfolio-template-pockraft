import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { useLandingPage } from '../../context/LandingPageContext';
import { Icon } from '../../factories/iconRegistry';

export function FeaturesSection() {
  const { features } = useLandingPage();
  return <section className="features section-border muted-section" id="about"><div className="container">
    <div className="section-heading"><Badge>{features.label}</Badge><h2>{features.title}</h2><p>{features.description}</p></div>
    <div className="card-grid">{features.items.map((item, index) => <Card key={item.title}><CardHeader><span className="icon-box"><Icon name={item.icon} /></span><span className="card-number">0{index + 1}</span></CardHeader><CardContent><h3>{item.title}</h3><p>{item.description}</p></CardContent></Card>)}</div>
  </div></section>;
}
