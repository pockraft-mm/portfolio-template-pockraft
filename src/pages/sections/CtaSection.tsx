import { ActionLink } from '../../components/ActionLink';
import { Badge } from '../../components/ui/badge';
import { useLandingPage } from '../../context/LandingPageContext';

export function CtaSection() {
  const { callToAction } = useLandingPage();
  return <section className="register section-border" id="demo"><div className="container"><div className="register-panel">
    <div><Badge>{callToAction.label}</Badge><h2>{callToAction.title}</h2><p>{callToAction.description}</p></div><ActionLink action={callToAction.action} showArrow />
  </div></div></section>;
}
