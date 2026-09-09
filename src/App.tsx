import type { ReactNode } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import blueMarble from './assets/blue-marble.jpg';
import dinosaurEarthHero from './assets/dinosaur-earth-hero.png';
import raptorCivilization from './assets/raptor-civilization.png';
import desaSatellite from './assets/desa-satellite.png';
import dinosaurEarthFinal from './assets/dinosaur-earth-final.png';
import forensicRaptorMap from './assets/forensic-raptor-map.png';
import './dinosaur-earth.css';

type ChromeProps = {
  number: string;
  section: string;
  children?: ReactNode;
};

function Chrome({ number, section, children }: ChromeProps) {
  return (
    <>
      <div className="de-classification">DESA // {section}</div>
      <div className="de-slide-number">{number}</div>
      <div className="de-bottom-rule" />
      {children}
    </>
  );
}

function GravityVerdict() {
  return (
    <div className="gravity-verdict" aria-label="Dinosaur Earth Society gravity experiment verdict">
      <div className="gravity-device">
        <small>Experimental apparatus</small>
        <strong>Small device</strong>
        <p>Purpose: prove NASA wrong</p>
      </div>
      <div className="gravity-status"><span>Gravity</span><strong>Is gone</strong></div>
      <div className="verdict-stamps"><span className="false-stamp">NASA false</span><span className="true-stamp">Device true</span></div>
    </div>
  );
}

const anatomyLabels = [
  { label: 'TAIL', className: 'tail' },
  { label: 'TORSO', className: 'torso' },
  { label: 'LEGS', className: 'legs' },
  { label: 'ARMS', className: 'arms' },
  { label: 'HEAD', className: 'head' },
];

const channelEvidence = [
  { signal: 'SATELLITE FOOTAGE', feature: 'Reliable source, not NASA', className: 'geo-mountains' },
  { signal: 'LUNAR ECLIPSES', feature: 'Dinosaur-shaped shadow', className: 'geo-florida' },
  { signal: 'TAIL INCIDENT', feature: 'Scientists sailed off the tail', className: 'geo-tail' },
  { signal: 'DIRECT OBSERVATION', feature: 'Curved and flat horizons', className: 'geo-trench' },
  { signal: 'CONFESSIONS', feature: 'Two ex-NASA employees', className: 'geo-australia' },
];

export default function App() {
  return (
    <Deck>
      <Slide full nav="The Earth is not round" notes="Pause after the title. Let the familiar Earth image settle in. Advance, then say very quietly: ‘It’s much worse.’ Lore source: https://www.youtube.com/watch?v=l-kp1mKnUKU">
        <section className="de-slide de-cover">
          <img className="cover-earth" src={blueMarble} alt="NASA Blue Marble view of Earth" />
          <div className="de-cover-copy">
            <span className="de-red-label">Classified briefing</span>
            <h1>THE EARTH<br />IS NOT ROUND.</h1>
            <span className="de-accent-rule" />
            <Build at={1} className="cover-reveal"><p>It's much worse.</p></Build>
          </div>
          <span className="distribution">Distribution restricted</span>
        </section>
      </Slide>

      <Slide full nav="The false binary" notes="Present Globe Earth and Flat Earth with equal disappointment. Reveal Dinosaur Earth last. The Dinosaur Earth Society describes NASA and the Flat Earth Society as coordinated distractions. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide de-grid-bg model-slide">
          <Chrome number="02" section="Planetary Morphology" />
          <header className="de-header">
            <p className="de-kicker">The model problem</p>
            <h1>For centuries, humanity has been trapped in a false binary.</h1>
          </header>
          <div className="model-row">
            <Build at={1} className="model-build"><article className="model-card rejected"><span className="model-symbol">×</span><h2>Globe<br />Earth</h2><small>Rejected</small></article></Build>
            <Build at={2} className="model-build"><article className="model-card rejected"><span className="model-symbol">×</span><h2>Flat<br />Earth</h2><small>Rejected</small></article></Build>
            <Build at={3} className="model-build"><article className="model-card confirmed"><span className="model-monogram">D</span><h2>Dinosaur<br />Earth</h2><small>Confirmed</small></article></Build>
          </div>
          <Build at={4} className="binary-caption"><p>They wanted you arguing about <strong>ROUND vs FLAT</strong> so you would never ask the real question.</p></Build>
        </section>
      </Slide>

      <Slide full nav="The true shape" notes="Say: ‘Five primary anatomical regions. One planetary body.’ The official classification is Velociraptor, within Dromaeosauridae. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide morphology-slide">
          <img className="full-visual" src={dinosaurEarthHero} alt="Photoreal Earth shaped like a velociraptor" />
          <div className="image-shade top" />
          <header className="de-image-header">
            <p className="de-kicker">DESA Satellite Classification // Velociraptor 3</p>
            <h1>The true shape of our planet</h1>
          </header>
          <Build at={1} className="anatomy-layer">
            {anatomyLabels.map((item) => <span key={item.label} className={`anatomy-label ${item.className}`}>{item.label}<i /></span>)}
          </Build>
          <Build at={2} className="confidence">Classification: Velociraptor // Dromaeosauridae</Build>
        </section>
      </Slide>

      <Slide full nav="73 million years ago" notes="Read the timeline like settled history. The official account says velociraptors reshaped a spherical Earth as a legacy because they knew their species would not last forever. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide history-slide">
          <img className="full-visual" src={raptorCivilization} alt="Advanced velociraptors engineering a planet" />
          <div className="history-vignette" />
          <Chrome number="04" section="Deep Time Reconstruction" />
          <header className="history-header">
            <p className="de-kicker">73 million years ago</p>
            <h1>The event they don't<br />teach you about</h1>
          </header>
          <Build at={4} className="history-quote"><p>They knew their species<br />would not last forever.<br /><strong>They left a planetary legacy.</strong></p></Build>
          <div className="history-timeline">
            {['Spherical Earth', 'Raptor civilization', 'Planetary engineering', 'Dinosaur Earth'].map((stage, index) => (
              <Build at={index + 1} className="history-step" key={stage}><i /><span>{stage}</span></Build>
            ))}
          </div>
        </section>
      </Slide>

      <Slide full nav="The evidence is everywhere" notes="Reveal the five claims as the channel presents them. The tail incident comes from ‘5 Reasons why Earth is Dinosaur Shaped’; the other evidence appears in the official FAQ. Sources: https://www.youtube.com/watch?v=l-kp1mKnUKU and https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide geo-slide">
          <img className="full-visual" src={forensicRaptorMap} alt="Classified geospatial map of Dinosaur Earth" />
          <div className="image-shade top" />
          <Chrome number="05" section="Global Feature Correlation" />
          <header className="de-image-header compact">
            <p className="de-kicker">Official evidence dossier</p>
            <h1>The evidence they could not erase</h1>
          </header>
          {channelEvidence.map((item, index) => (
            <Build at={index + 1} className={`geo-label ${item.className}`} key={item.signal}><small>{item.signal}</small><strong>{item.feature}</strong></Build>
          ))}
        </section>
      </Slide>

      <Slide full nav="The gravity argument" notes="Treat the small device as decisive experimental equipment. Reveal the verdict exactly as the channel does: ‘Gravity is gone.’ Source: https://www.youtube.com/watch?v=kIATlUTINrM">
        <section className="de-slide de-grid-bg gravity-slide">
          <Chrome number="06" section="Gravitational Mechanics" />
          <header className="de-header">
            <p className="de-kicker">Experimental proof</p>
            <h1>Gravity is gone</h1>
          </header>
          <div className="gravity-layout">
            <div className="gravity-copy">
              <Build at={1}><div className="gravity-claim">With this small device, I shall prove NASA is wrong.</div><div className="coefficient">Channel experiment // May 2019</div></Build>
              <Build at={3} className="checkmate"><h2>Gravity: fake.</h2><p>Small device: true.</p></Build>
            </div>
            <Build at={2} className="chart-build"><GravityVerdict /></Build>
          </div>
        </section>
      </Slide>

      <Slide full nav="Follow the money" notes="Treat the chain like investigative journalism. The official FAQ claims NASA manufactures globes, promotes the globe model to sell them, and spends the revenue persecuting opponents. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide money-slide de-grid-bg">
          <Chrome number="07" section="Financial Intelligence Unit" />
          <header className="de-header">
            <p className="de-kicker">Follow the money</p>
            <h1>Why would NASA lie?</h1>
            <p className="de-subhead">Who benefits from Globe Earth?</p>
          </header>
          <div className="money-chain">
            {['NASA', 'Makes globes', 'Sells Round Earth', 'Funds propaganda', 'Targets opponents'].map((node, index) => (
              <Build at={index + 1} className="money-node-build" key={node}><div className={`money-node ${index === 4 ? 'money-result' : ''}`}>{node}</div></Build>
            ))}
          </div>
          <Build at={6} className="money-equation"><strong>Globe sales</strong><i /><strong>Propaganda</strong><i /><strong className="danger">Persecution</strong><p>NASA reinvests the revenue.</p></Build>
        </section>
      </Slide>

      <Slide full nav="The conspiracy within" notes="Call Round Earth and Flat Earth ‘two approved opinions.’ Pause on the upper debate. Then reveal Dinosaur Earth and say: ‘The argument is above us. The evidence is under us.’">
        <section className="de-slide distraction-slide">
          <Chrome number="08" section="Information Operations" />
          <header className="de-header">
            <p className="de-kicker">Controlled debate</p>
            <h1>The conspiracy within the conspiracy</h1>
          </header>
          <div className="approved-debate"><div className="debate-box">Round Earth</div><div className="debate-wire"><span>Endless argument</span></div><div className="debate-box">Flat Earth</div></div>
          <p className="argument-caption">While millions argue here...</p>
          <Build at={1} className="truth-reveal"><h2>Dinosaur Earth</h2><p>...nobody looks down.</p></Build>
        </section>
      </Slide>

      <Slide full nav="Meet DESA" notes="Introduce DESA as the reliable alternative to NASA. The official FAQ credits several DESA satellites, including Velociraptor 3, with all authentic satellite images. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide desa-slide">
          <img className="full-visual" src={desaSatellite} alt="DESA satellite photographing Dinosaur Earth" />
          <div className="desa-vignette" />
          <Chrome number="09" section="Orbital Capabilities" />
          <header className="de-image-header">
            <p className="de-kicker">Independent orbital science</p>
            <h1>NASA has competition</h1>
          </header>
          <Build at={1} className="desa-identity"><div className="desa-patch"><b>D</b><small>DESA</small></div><h2>Dinosaur Earth<br />Space Agency</h2></Build>
          <Build at={2} className="agency-table">
            <div className="agency-col"><h3>NASA</h3><p>Government organization</p><p>Produces globe imagery</p><p>Pays space travelers</p><p>Hides Earth's shape</p></div>
            <div className="agency-col"><h3>DESA</h3><p>Reliable alternative</p><p>Velociraptor 3 satellite</p><p>Several satellites in orbit</p><p>Source of authentic images</p></div>
          </Build>
        </section>
      </Slide>

      <Slide full nav="The scientific proof" notes="Read each premise with academic restraint. The curved-and-flat argument appears in both the official FAQ and ‘5 Reasons why Earth is Dinosaur Shaped.’ Sources: https://dinosaurearthsociety.com/faq.php and https://www.youtube.com/watch?v=l-kp1mKnUKU">
        <section className="de-slide proof-slide">
          <Chrome number="10" section="Formal Proof Series" />
          <header className="de-header">
            <p className="de-kicker">Theorem 73M</p>
            <h1>The logic is irrefutable</h1>
          </header>
          <div className="proof-paper">
            <Build at={1} className="proof-line"><small>Premise 1</small><p>Some parts of Earth are curved.</p></Build>
            <Build at={2} className="proof-line"><small>Premise 2</small><p>Some parts of Earth are flat.</p></Build>
            <Build at={3} className="proof-line"><small>Premise 3</small><p>Velociraptors contain both curved and flat surfaces.</p></Build>
            <Build at={4} className="proof-conclusion"><small>Therefore</small><p>EARTH = VELOCIRAPTOR</p><b>Q.E.D.</b></Build>
          </div>
          <Build at={4} className="proof-foot">No further assumptions required.</Build>
        </section>
      </Slide>

      <Slide full nav="Your location" notes="Ask the audience to locate their country on the Velociraptor 3 image. The official method says a country that cannot be found probably does not exist. Source: https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide location-slide">
          <img className="full-visual" src={forensicRaptorMap} alt="Velociraptor 3 image used to locate countries on Dinosaur Earth" />
          <div className="location-vignette" />
          <Chrome number="11" section="Local Morphology" />
          <header className="de-image-header compact">
            <p className="de-kicker">Velociraptor 3 satellite imagery</p>
            <h1>Where is your country on the dinosaur?</h1>
            <p className="location-question">The official DESA method is simple.</p>
          </header>
          <Build at={1} className="country-marker"><i /><span><small>Search protocol</small>Inspect the satellite image</span></Build>
          <Build at={2} className="country-reveal">Can't find it? It probably does not exist.</Build>
        </section>
      </Slide>

      <Slide full nav="Wake up" notes="Deliver the first two lines separately. Pause after each. Give the final claim at full volume. Source: https://www.youtube.com/watch?v=l-kp1mKnUKU">
        <section className="de-slide finale-slide">
          <img className="full-visual" src={dinosaurEarthFinal} alt="Dinosaur Earth rising in space" />
          <div className="finale-vignette" />
          <div className="finale-copy">
            <Build at={1}><p>The Earth isn't flat.</p></Build>
            <Build at={2}><p>The Earth isn't round.</p></Build>
            <span className="de-accent-rule" />
            <Build at={3}><h1>The Earth is a<br />velociraptor.</h1></Build>
            <Build at={4}><h2>Thank you. I will not be taking questions funded by NASA.</h2></Build>
          </div>
          <span className="final-source">Sources: Dinosaur Earth Society // DESA archives</span>
        </section>
      </Slide>

      <Slide full nav="Sources" notes="Primary sources: Dinosaur Earth Society YouTube channel, https://www.youtube.com/@DinosaurEarth/videos; 5 Reasons why Earth is Dinosaur Shaped, https://www.youtube.com/watch?v=l-kp1mKnUKU; Gravity is gone, https://www.youtube.com/watch?v=kIATlUTINrM; official FAQ, https://dinosaurearthsociety.com/faq.php">
        <section className="de-slide de-grid-bg credits-slide">
          <Chrome number="13" section="Source Registry" />
          <div className="credits-content">
            <p className="de-kicker">Verified reference file</p>
            <h1>Sources</h1>
            <span className="credits-rule" />
            <div className="credits-list">
              <Build at={1} className="credit-row">
                <small>Lore &amp; research</small>
                <div><strong>Dinosaur Earth Society</strong><span>youtube.com/@DinosaurEarth</span></div>
              </Build>
              <Build at={2} className="credit-row">
                <small>Primary briefing</small>
                <div><strong>5 Reasons why Earth is Dinosaur Shaped</strong><span>youtube.com/watch?v=l-kp1mKnUKU</span></div>
              </Build>
              <Build at={3} className="credit-row">
                <small>Field experiment</small>
                <div><strong>Gravity is gone</strong><span>youtube.com/watch?v=kIATlUTINrM</span></div>
              </Build>
              <Build at={4} className="credit-row">
                <small>Reference archive</small>
                <div><strong>Official FAQ</strong><span>dinosaurearthsociety.com/faq.php</span></div>
              </Build>
            </div>
          </div>
        </section>
      </Slide>
    </Deck>
  );
}
