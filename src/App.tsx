import type { ReactNode } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import dinosaurEarthFinal from './assets/dinosaur-earth-final.png';
import forensicRaptorMap from './assets/forensic-raptor-map.png';
import blueMarble from './assets/blue-marble.jpg';
import raptorCivilization from './assets/raptor-civilization.png';
import portraitPlato from './assets/portrait-plato.png';
import portraitGandalf from './assets/portrait-gandalf.png';
import portraitConfucius from './assets/portrait-confucius.png';
import portraitNewton from './assets/portrait-newton.png';
import trumpSymbolism from './assets/trump-symbolism.png';
import elonSymbolism from './assets/elon-symbolism.png';
import zuckerbergSymbolism from './assets/zuckerberg-symbolism.png';
import kanyeSymbolism from './assets/kanye-symbolism.png';
import bezosSymbolism from './assets/bezos-symbolism.png';
import vikingsFellToMoon from './assets/vikings-fell-to-moon.png';
import evidenceComparison from './assets/evidence-comparison.png';
import evidenceMountain from './assets/evidence-mountain.png';
import evidenceLamp from './assets/evidence-lamp.png';
import evidencePooh from './assets/evidence-pooh.png';
import kidsKnowDinosaurEarth from './assets/kids-know-dinosaur-earth.png';
import './dinosaur-earth.css';

type ClassifiedChapterProps = {
  number: string;
  title: string;
  subtitle: string;
};

function ClassifiedChapter({ number, title, subtitle }: ClassifiedChapterProps) {
  return (
    <section className="de-slide history-opener">
      <div className="history-opener-number" aria-hidden="true">{number.padStart(2, '0')}</div>
      <div className="history-opener-copy">
        <span className="history-opener-label">Classified briefing</span>
        <h1>{title}</h1>
        <span className="history-opener-rule" />
        <p>{subtitle}</p>
      </div>
      <div className="history-opener-footer">
        <span>DESA archive</span>
        <span>Section {number.padStart(2, '0')}</span>
      </div>
    </section>
  );
}

function Paper({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`paper-sheet ${className}`}>{children}</div>;
}

function SourceMark({ children }: { children: ReactNode }) {
  return <span className="source-mark">{children}</span>;
}

type HistoryQuoteProps = {
  src: string;
  alt: string;
  number: string;
  quote: string;
  attribution: string;
  variant: 'philosopher' | 'wizard' | 'sage' | 'scientist';
};

function HistoryQuote({ src, alt, number, quote, attribution, variant }: HistoryQuoteProps) {
  return (
    <section className={`de-slide paper-slide history-quote-slide ${variant}`}>
      <Paper className="history-quote-paper">
        <div className="history-quote-number" aria-hidden="true">{number}</div>
        <figure className="history-quote-portrait">
          <div className="history-portrait-frame"><img src={src} alt={alt} /></div>
          <figcaption>Recovered testimony {number}</figcaption>
        </figure>
        <div className="history-quote-copy">
          <SourceMark>Before the globe</SourceMark>
          <Build at={1}><blockquote>“{quote}”</blockquote></Build>
          <Build at={2}><cite>{attribution}</cite></Build>
        </div>
        <div className="history-quote-seal" aria-hidden="true">DESA</div>
      </Paper>
    </section>
  );
}

const symbolismFigures = [
  { name: 'Elon Musk', src: elonSymbolism, alt: 'Elon Musk wearing a black suit, white shirt, black tie, and black shoes', className: 'elon' },
  { name: 'Mark Zuckerberg', src: zuckerbergSymbolism, alt: 'Mark Zuckerberg walking in a blue suit, white shirt, blue tie, and dark shoes', className: 'zuckerberg' },
  { name: 'Kanye West', src: kanyeSymbolism, alt: 'Kanye West wearing a black suit, white shirt, black tie, and sunglasses', className: 'kanye' },
  { name: 'Jeff Bezos', src: bezosSymbolism, alt: 'Jeff Bezos wearing a dark suit, white shirt, patterned tie, and black shoes', className: 'bezos' },
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

      <Slide full nav="1. History" notes="Open the first of the presentation’s four sections: History.">
        <ClassifiedChapter number="1" title="History" subtitle="The evidence has been hiding in plain sight for 5,000 years." />
      </Slide>

      <Slide full nav="5,000 years" notes="Establish the historical premise before the recovered quotations: people recognized Dinosaur Earth thousands of years before modern globe imagery.">
        <section className="de-slide archive-age-slide">
          <div className="archive-age-copy">
            <p className="archive-age-kicker">Recorded knowledge // c. 3000 BCE to present</p>
            <h1><span>5,000</span> years of Dinosaur Earth</h1>
            <p className="archive-age-lede">People recognized the planet’s true shape thousands of years before modern globe imagery.</p>
            <p className="archive-age-bridge">The quotations that follow are surviving fragments of that knowledge.</p>
          </div>
          <figure className="archive-age-visual">
            <img src={raptorCivilization} alt="Reconstruction of an ancient civilization studying Dinosaur Earth" />
            <div className="archive-age-redactions" aria-hidden="true"><i /><i /><i /></div>
            <figcaption>Archive reconstruction</figcaption>
          </figure>
        </section>
      </Slide>

      <Slide full nav="Plato" notes="Reveal the quotation, then the attribution. Deliver it as the result of years of serious field research.">
        <HistoryQuote
          src={portraitPlato}
          alt="Colorful sculptural portrait representing Plato"
          number="01"
          quote="After many years of observation, I must conclude that our planet is shaped like the reptiles of old."
          attribution="Plato"
          variant="philosopher"
        />
      </Slide>

      <Slide full nav="Gandalf" notes="Reveal ‘Fools.’ and pause. After the attribution appears, explain that he simply described flat earthers as ‘fools.’">
        <HistoryQuote
          src={portraitGandalf}
          alt="Portrait of Gandalf the Grey holding his staff"
          number="02"
          quote="Fools."
          attribution="Gandalf the Grey"
          variant="wizard"
        />
      </Slide>

      <Slide full nav="Confucius" notes="Let the Chinese quotation sit silently for a beat. Do not translate or explain it. Reveal the attribution and move on.">
        <HistoryQuote
          src={portraitConfucius}
          alt="Traditional monochrome portrait of Confucius"
          number="03"
          quote="这颗星球的形状，早已写在恐龙的骨骼里。"
          attribution="孔子"
          variant="sage"
        />
      </Slide>

      <Slide full nav="The cleanup" notes="Play the cover-up premise completely straight. Reveal the two tactics separately, then pause on the final line.">
        <section className="de-slide erasure-slide">
          <div className="erasure-copy">
            <p className="erasure-kicker">Archive suppression // 1958 to present</p>
            <h1>NASA worked hard to make the past look round.</h1>
            <p className="erasure-lede">The archive survives. The interpretation gets replaced.</p>
            <div className="erasure-methods">
              <Build at={1} className="erasure-method">
                <span>01</span>
                <p>Move every inconvenient clue into the mythology section.</p>
              </Build>
              <Build at={2} className="erasure-method">
                <span>02</span>
                <p>Repeat one clean globe image until it becomes the only Earth people remember.</p>
              </Build>
            </div>
            <Build at={3} className="erasure-quote">“You do not have to erase every scroll. You only have to own the thumbnail.”</Build>
          </div>
          <figure className="erasure-visual">
            <img src={blueMarble} alt="A round blue Earth used as visual shorthand for the official globe model" />
            <div className="erasure-bars" aria-hidden="true"><i /><i /><i /><i /></div>
            <figcaption>THE REPLACEMENT IMAGE</figcaption>
          </figure>
        </section>
      </Slide>

      <Slide full nav="2. Symbolism" notes="Open the second section with the same classified briefing treatment used for History.">
        <ClassifiedChapter number="2" title="Symbolism" subtitle="Words have shapes. Shapes have meaning. This is basically linguistics." />
      </Slide>

      <Slide full nav="The outfit clue" notes="Reveal the three clothing symbols separately. Shoes mean Earth. The shirt means shaped like. The tie means dinosaur. End on the decoded message.">
        <section className="de-slide trump-symbolism-slide">
          <header className="trump-symbolism-header">
            <p>Symbol analysis // public record</p>
            <h1>The outfit spells it out</h1>
          </header>
          <figure className="trump-symbolism-photo">
            <img src={trumpSymbolism} alt="Donald Trump standing in a dark coat, white shirt, red tie, and black shoes" />
            <figcaption>Evidence photograph // full-body attire</figcaption>
          </figure>
          <div className="trump-symbolism-callouts">
            <Build at={1} className="symbol-callout shoes-symbol"><small>01 // shoes</small><strong>Earth</strong><i /></Build>
            <Build at={2} className="symbol-callout shirt-symbol"><small>02 // shirt</small><strong>Shaped like</strong><i /></Build>
            <Build at={3} className="symbol-callout tie-symbol"><small>03 // tie</small><strong>Dinosaur</strong><i /></Build>
          </div>
          <Build at={4} className="trump-symbolism-verdict"><small>Decoded message</small><strong>Earth is dinosaur shaped</strong></Build>
        </section>
      </Slide>

      <Slide full nav="It’s not just him" notes="Reveal each figure in sequence. They repeat the same suit symbolism. End with the accusation: all have been lying to us.">
        <section className="de-slide other-symbolists-slide">
          <header className="other-symbolists-header">
            <div>
              <p>Pattern expansion // four more cases</p>
              <h1>It’s not just him</h1>
            </div>
            <p className="other-symbolists-lede">Think of Elon Musk, Mark Zuckerberg, Kanye West and Jeff Bezos.</p>
          </header>
          <div className="other-symbolists-lineup">
            {symbolismFigures.map((figure, index) => (
              <Build at={index + 1} className={`other-symbolist ${figure.className}`} key={figure.name}>
                <figure>
                  <img src={figure.src} alt={figure.alt} />
                  <figcaption><span>0{index + 1}</span><strong>{figure.name}</strong></figcaption>
                </figure>
              </Build>
            ))}
          </div>
          <Build at={5} className="other-symbolists-verdict"><strong>All have been lying to us</strong></Build>
        </section>
      </Slide>

      <Slide full nav="3. Science" notes="Open the third section with the same classified briefing treatment used for History and Symbolism.">
        <ClassifiedChapter number="3" title="Science" subtitle="At last: diagrams, satellites and one very small device." />
      </Slide>

      <Slide full nav="The Viking incident" notes="State the incident as settled navigational history. Reveal the Moon landing after the audience takes in the ship falling from Dinosaur Earth.">
        <section className="de-slide viking-moon-slide">
          <img className="full-visual" src={vikingsFellToMoon} alt="A Viking longship falling from Dinosaur Earth through space toward the Moon" />
          <div className="viking-moon-shade" />
          <div className="viking-moon-copy">
            <p className="viking-moon-kicker">Historical incident // Viking navigation archive</p>
            <h1>While sailing, the Vikings fell off the Earth</h1>
            <Build at={1} className="viking-moon-result"><p>They landed on the Moon.</p></Build>
          </div>
          <span className="viking-moon-file">DESA file 003 // route terminated</span>
        </section>
      </Slide>

      <Slide full nav="Isaac Newton" notes="Reveal Newton’s quotation, then the attribution. Give the line about inventing gravity the same scholarly confidence as the earlier recovered testimonies.">
        <HistoryQuote
          src={portraitNewton}
          alt="Colorful sculptural portrait representing Isaac Newton"
          number="04"
          quote="It is an absurd idea that earth is round because of gravity. The exact opposite is true; gravity pulls earth into a dinosaur shape. Without gravity, earth would quickly lose its unique shape."
          attribution="Isaac Newton, inventor of gravity"
          variant="scientist"
        />
      </Slide>

      <Slide full nav="Theory comparison" notes="Reveal the archived comparison, then the DESA score. The source image’s derogatory final row has been omitted; the scientific claims remain intact.">
        <section className="de-slide theory-check-slide">
          <div className="theory-check-grid">
            <Build at={1} className="theory-meme-wrap">
              <img src={evidenceComparison} alt="Comparison of flat, round, and dinosaur Earth theories across several claimed observations" />
              <span>Internet research archive // comparison 06</span>
            </Build>
            <div className="theory-check-copy">
              <p className="theory-check-kicker">DESA model review</p>
              <h1>Only one theory survives every test</h1>
              <Build at={2} className="theory-check-score">
                <strong>6/6</strong>
                <span>Dinosaur Earth</span>
                <p>Day and night. Seasons. Eclipses. Every box checked.</p>
              </Build>
            </div>
          </div>
          <span className="theory-check-file">FILE 004 // ROUND MODEL REJECTED</span>
        </section>
      </Slide>

      <Slide full nav="Independent evidence" notes="Reveal three independent visual arguments from the online research archive. Give each exhibit a beat before advancing to the next.">
        <section className="de-slide evidence-wall-slide">
          <header className="evidence-wall-header">
            <p>Cross-checked online</p>
            <h1>Independent observers keep reaching the same result</h1>
          </header>
          <div className="evidence-wall-grid">
            <Build at={1} className="evidence-wall-item mountain">
              <span>Exhibit A</span>
              <img src={evidenceMountain} alt="Dinosaur Earth compared with a circled mountain silhouette" />
              <figcaption>Mountain silhouette</figcaption>
            </Build>
            <Build at={2} className="evidence-wall-item lamp">
              <span>Exhibit B</span>
              <img src={evidenceLamp} alt="Desk lamp demonstration comparing daylight on round, flat, and dinosaur Earth" />
              <figcaption>Desk-lamp model</figcaption>
            </Build>
            <Build at={3} className="evidence-wall-item pooh">
              <span>Exhibit C</span>
              <img src={evidencePooh} alt="Three-panel reaction meme preferring dinosaur Earth over flat and round models" />
              <figcaption>Three-option test</figcaption>
            </Build>
          </div>
          <Build at={4} className="evidence-wall-stamp">CONSENSUS ACHIEVED</Build>
        </section>
      </Slide>

      <Slide full nav="4. Intuition" notes="Open the fourth section with the same classified briefing treatment used for the other section dividers.">
        <ClassifiedChapter number="4" title="Intuition" subtitle="What’s the shape of the earth? You already know." />
      </Slide>

      <Slide full nav="The shape test" notes="Treat the outline as self-evident. Point to the curve along the back, the straight tail section, and the hard edges at the claws.">
        <section className="de-slide intuition-geometry-slide">
          <img className="full-visual" src={forensicRaptorMap} alt="Forensic map of Dinosaur Earth showing its varied outline" />
          <div className="intuition-geometry-shade" />
          <div className="intuition-geometry-copy">
            <p>Intuition test 01</p>
            <h1>It just makes sense</h1>
            <strong>The Earth has curves, edges and straight parts.</strong>
          </div>
          <div className="intuition-shape-label straight"><span>Straight parts</span><i /></div>
          <div className="intuition-shape-label curves"><span>Curves</span><i /></div>
          <div className="intuition-shape-label edges"><span>Edges</span><i /></div>
          <div className="intuition-geometry-file">DESA outline review // obvious on sight</div>
        </section>
      </Slide>

      <Slide full nav="Ask the kids" notes="State the claim plainly: even children recognize Dinosaur Earth without being coached. Let the drawing carry the joke.">
        <section className="de-slide kids-know-slide">
          <img className="full-visual" src={kidsKnowDinosaurEarth} alt="A child holding a crayon drawing of a dinosaur-shaped Earth" />
          <div className="kids-know-shade" />
          <div className="kids-know-copy">
            <p>Intuition test 02</p>
            <h1>Even kids know</h1>
            <strong>Just ask them.</strong>
          </div>
          <div className="kids-know-file">EARLY GEOGRAPHY STUDY // UNPROMPTED RESULT</div>
        </section>
      </Slide>

      <Slide full nav="Wake up" notes="End on the simple claim, then reveal the closer. Source: https://www.youtube.com/watch?v=l-kp1mKnUKU">
        <section className="de-slide finale-slide">
          <img className="full-visual" src={dinosaurEarthFinal} alt="Dinosaur Earth rising in space" />
          <div className="finale-vignette" />
          <div className="finale-copy">
            <p>THE EARTH ISN’T FLAT.</p>
            <p>THE EARTH ISN’T ROUND.</p>
            <Build at={1}><h1>The Earth is<br />a dinosaur.</h1></Build>
            <Build at={2}><h2>Wake up, sheeple.</h2></Build>
          </div>
          <div className="final-links">dinosaurearthsociety.com&nbsp;&nbsp; • &nbsp;&nbsp;@DinosaurEarth</div>
        </section>
      </Slide>

      <Slide full nav="Follow the research" notes="Close with the Dinosaur Earth post and the three primary research links. Reveal the community note, then the source list.">
        <section className="de-slide social-sources-slide">
          <div className="social-orbit" aria-hidden="true" />
          <article className="social-post social-sources-post">
            <header><div className="social-avatar">D</div><div><b>Dinosaur Earth Society</b><span>@DinosaurEarth</span></div><em>•••</em></header>
            <p>Earth.</p>
            <figure><img src={dinosaurEarthFinal} alt="Dinosaur-shaped Earth posted as social proof" /></figure>
            <footer><span>💬 42</span><span>↻ 3,000</span><span>♡ 73M</span><span>⌁</span></footer>
          </article>
          <Build at={1} className="social-note social-sources-note"><b>Community note</b><p>Readers added context: look at it.</p></Build>
          <div className="social-sources-copy">
            <SourceMark>Research archive</SourceMark>
            <h1>The research continues</h1>
            <Build at={2} className="social-sources-links">
              <a href="https://www.youtube.com/watch?v=l-kp1mKnUKU" target="_blank" rel="noreferrer"><small>Primary briefing</small><strong>5 Reasons why Earth is Dinosaur Shaped</strong><span>YouTube ↗</span></a>
              <a href="https://x.com/DinosaurEarth" target="_blank" rel="noreferrer"><small>Ongoing research</small><strong>@DinosaurEarth</strong><span>X ↗</span></a>
              <a href="https://dinosaurearthsociety.com/faq/" target="_blank" rel="noreferrer"><small>Frequently avoided questions</small><strong>The official FAQ</strong><span>Dinosaur Earth Society ↗</span></a>
            </Build>
          </div>
          <p className="social-sources-foot">A parody presentation. No globes were consulted.</p>
        </section>
      </Slide>
    </Deck>
  );
}
