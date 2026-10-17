import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { useLandingPage } from '../../context/LandingPageContext';
import { Icon } from '../../factories/iconRegistry';

export function ProcessSection() {
  const { steps } = useLandingPage();
  return <section className="details section-border" id="how-it-works"><div className="container">
    <div className="section-heading compact-heading"><Badge>{steps.label}</Badge><h2>{steps.title}</h2></div>
    <div className="card-grid">{steps.items.map((step) => <Card key={step.label} className="detail-card"><CardHeader><span className="icon-box"><Icon name={step.icon} /></span><span className="detail-label">{step.label}</span></CardHeader><CardContent><h3>{step.title}</h3><p>{step.description}</p></CardContent></Card>)}</div>
  </div></section>;
}
