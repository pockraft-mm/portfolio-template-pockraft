import { ActionLink } from '../../components/ActionLink';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { useLandingPage } from '../../context/LandingPageContext';
import { Icon } from '../../factories/iconRegistry';

export function PricingSection() {
  const { pricing } = useLandingPage();
  return <section className="pricing section-border muted-section" id="pricing"><div className="container">
    <div className="section-heading compact-heading"><Badge>{pricing.label}</Badge><h2>{pricing.title}</h2><p>{pricing.description}</p></div>
    <div className="card-grid">{pricing.tiers.map((tier) => <Card key={tier.label} className={`price-card ${tier.highlighted ? 'price-card-featured' : ''}`}>
      <CardHeader><span className="icon-box"><Icon name={tier.icon} /></span><span className="detail-label">{tier.label}</span></CardHeader>
      <CardContent><div className="price-header"><span className="price-amount">{tier.price}</span>{tier.period && <span className="price-period">{tier.period}</span>}</div>
        <p className="price-description">{tier.description}</p><ul className="price-features">{tier.features.map((feature) => <li key={feature}><Icon name="check" size={14} /> {feature}</li>)}</ul>
        <ActionLink action={{ ...tier.action, variant: tier.action.variant ?? (tier.highlighted ? 'default' : 'outline') }} className="price-button" />
      </CardContent></Card>)}</div>
  </div></section>;
}
