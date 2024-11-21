import { useState, useEffect } from 'react'
import fullpage from 'fullpage.js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SVG from 'react-inlinesvg';
import worldMap from './assets/world.svg'; // Adjust the path as necessary
import jsonData from './data.json'; // Adjust the path as necessary

//remember world 3d model 
// and world map with json data
// 
import './App.css'
import './Infobox.css'
import './Container.css'
import './Container2.css'
import './Container3.css'
import './Container4.css'

function App() {
    const [count, setCount] = useState(0)
    
  
    

    const [showFirstDiv, setShowFirstDiv] = useState(true);

    const toggleDiv = () => {
        setShowFirstDiv(prevShowFirstDiv => !prevShowFirstDiv);
    };

    const [showFirstIssue, setShowFirstIssue] = useState(true);
    const [showSecondIssue, setShowSecondIssue] = useState(true);

    const toggleContentFirst = () => {
        setShowFirstIssue(!showFirstIssue);
    };

    const toggleContentSecond = () => {
        setShowSecondIssue(!showSecondIssue);
    };

    useEffect(() => {
      
      new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
      });
      
        const cards = document.querySelectorAll('.card3-1, .card3-2');
        const cardElements = document.querySelectorAll('.card3');

        const handleMouseOver = () => {
            console.log('Mouse over');
            cardElements.forEach(card => card.classList.add('blue'));
        };

        const handleMouseOut = () => {
            console.log('Mouse out');
            cardElements.forEach(card => card.classList.remove('blue'));
        };

        cards.forEach(item => {
            item.addEventListener('mouseover', handleMouseOver);
            item.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            cards.forEach(item => {
                item.removeEventListener('mouseover', handleMouseOver);
                item.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);



return (
<>
  <div id='fullpage'>
  <section className='section'>
    <div className='slides slide1'>
      <h1> Satellite Assignment </h1>
    </div>
  </section>

  <section className='section'>
    <div className='slides slide2'>
      <div className='sliding-window'>
        {showFirstDiv ? (
        <div>
          <button onClick={toggleDiv}>Toggle to Tabular Data</button>
          <div className="container1">
            <div className="content">
              <div className='right'>
                <div className="infobox">
                  <h3>International Telecommunication Union (ITU)</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <a href="https://www.itu.int/en/Pages/default.aspx" target='blank'>
                            <img src='https://github.com/yadnyeshkolte/ece-satellite-assignment/blob/main/src/assets/Itu-logo.png' alt='ITU Logo'></img>
                          </a>
                        </th>
                      </tr>
                      <tr>
                        <th>Abbreviation</th>
                        <td>ITU</td>
                      </tr>
                      <tr>
                        <th>Formation</th>
                        <td>17 May 1865; 159 years ago</td>
                      </tr>
                      <tr>
                        <th>Type</th>
                        <td>United Nations specialized agency</td>
                      </tr>
                      <tr>
                        <th>Headquarters</th>
                        <td>Geneva, Switzerland</td>
                      </tr>
                      <tr>
                        <th>Parent organization</th>
                        <td>United Nations Economic and Social Council</td>
                      </tr>
                      <tr>
                        <th>Membership</th>
                        <td>194 countries and around 900 businesses, academic institutions, and
                          international organizations</td>
                      </tr>
                      <tr>
                        <th>Key Areas of Focus</th>
                        <td>Radio spectrum management, satellite orbit assignment,
                          telecommunications standards development, broadband Internet, optical
                          communications, wireless technologies, navigation, radio astronomy, and
                          meteorology</td>
                      </tr>
                      <tr>
                        <th>Major Sectors</th>
                        <td>ITU-R (Radiocommunication), ITU-T (Standardization), ITU-D (Development)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="left">
                <h2>Frequency Allocation in Different Satellite Orbits</h2>
                <p>Satellite communication relies heavily on the allocation of frequency bands, which are
                  managed by international and national regulatory bodies. The characteristics of
                  different orbits—Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary
                  Orbit (GEO) influence how frequencies are assigned and how interference is mitigated.
                  This section explores these aspects in detail.</p>

                <h3>1. Frequency Bands and Their Uses</h3>
                <p>Different frequency bands are designated for satellite communications, each with unique
                  properties that make them suitable for specific applications. The most commonly used
                  frequency bands include:</p>
                <ul>
                  <li><strong>C-band:</strong> Ranges from 4 to 8 GHz, traditionally used for television
                    broadcasts and satellite communications. It is less susceptible to rain fade but
                    offers lower bandwidth compared to higher bands.</li>
                  <li><strong>Ku-band:</strong> Ranges from 12 to 18 GHz, widely used for satellite
                    television, data communications, and broadband services. It provides higher
                    bandwidth but is more affected by atmospheric conditions.</li>
                  <li><strong>Ka-band:</strong> Ranges from 26.5 to 40 GHz, used for high-throughput
                    satellite services. It offers very high bandwidth but is significantly impacted by
                    rain fade.</li>
                </ul>

                <h3>2. Role of Regulatory Bodies</h3>
                <p>The International Telecommunication Union (ITU) plays a crucial role in the allocation of
                  frequencies globally. It establishes regulations to ensure that satellite communications
                  do not interfere with terrestrial systems and other satellites. National regulatory
                  bodies, such as the Federal Communications Commission (FCC) in the United States or
                  Ofcom in the UK, implement these regulations locally, managing frequency assignments
                  based on regional needs.</p>
              </div>
            </div>
          </div>
        </div>
        ) : (
        <div>
          <button onClick={toggleDiv}>Toggle to Data Report</button>
          <div className="container">
            <div className="content">
              <div className="table">
                <h2>Frequency Bands and Their Uses in Satellite Communications</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Frequency Band</th>
                      <th>Frequency Range (GHz)</th>
                      <th>Uses</th>
                      <th>Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C-band</td>
                      <td>4 - 8</td>
                      <td>Television broadcasts, satellite communications, and data services.</td>
                      <td>Less susceptible to rain fade; lower bandwidth.</td>
                    </tr>
                    <tr>
                      <td>Ku-band</td>
                      <td>12 - 18</td>
                      <td>Satellite television, broadband services, and data communications.</td>
                      <td>Higher bandwidth; more affected by atmospheric conditions.</td>
                    </tr>
                    <tr>
                      <td>Ka-band</td>
                      <td>26.5 - 40</td>
                      <td>High-throughput satellite services, broadband, and advanced applications.
                      </td>
                      <td>Very high bandwidth; significantly impacted by rain fade.</td>
                    </tr>
                    <tr>
                      <td>Q/V-band</td>
                      <td>40 - 75</td>
                      <td>Ultra-high capacity communications.</td>
                      <td>Extremely high bandwidth; sensitive to atmospheric conditions.</td>
                    </tr>
                    <tr>
                      <td>V-band</td>
                      <td>40 - 75</td>
                      <td>Next-generation broadband and advanced applications.</td>
                      <td>Very high frequency; requires precise alignment for communication.</td>
                    </tr>
                    <tr>
                      <td>X-band</td>
                      <td>8 - 12</td>
                      <td>Military applications, weather radar.</td>
                      <td>Higher data rates; less susceptible to rain attenuation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table">
                <h2>Frequency Allocation</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Orbit Type</th>
                      <th>Altitude Range</th>
                      <th>Common Frequency Bands</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Low Earth Orbit</td>
                      <td>160 to 2,000 km</td>
                      <td>VHF, UHF, L-band</td>
                      <td>Earth observation, remote sensing, mobile communications</td>
                    </tr>
                    <tr>
                      <td>Medium Earth Orbit</td>
                      <td>2,000 to 35,786 km</td>
                      <td>L-band, Ka-band</td>
                      <td>Navigation (e.g., GNSS), broadband communications</td>
                    </tr>
                    <tr>
                      <td>Geostationary Orbit</td>
                      <td>~35,786 km</td>
                      <td>C-band, Ku-band, Ka-band</td>
                      <td>Fixed satellite services, broadcasting, and broadband</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  </section>
  <section className='section'>
    <div className='slides slide3'>
      <div className='card-window'>
      <div className='containe2'>
        <div className='card-upper'>
          <h2>Interference Between Satellites</h2>
          <p>Satellites operating in the same or nearby orbits face significant challenges in avoiding
            interference, which can arise from overlapping frequency bands, spatial proximity, and
            electromagnetic emissions. Here’s an overview of how these challenges are managed and the techniques
            employed to mitigate interference.</p>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>Spatial Separation (Orbital Slots)</h3>
            <p>Satellites are assigned specific orbital slots to maintain physical separation. This spatial
              separation is
              crucial for preventing interference, particularly in geostationary orbits where satellites are
              positioned at
              fixed longitudes. In Low Earth Orbit (LEO) and Medium Earth Orbit (MEO), operators utilize
              different
              altitudes and inclinations to minimize overlap and potential interference.</p>
          </div>
          <div className="card">
            <h3>Polarization</h3>
            <p>Different polarizations (horizontal, vertical, circular) are used for transmissions to reduce
              interference.
              By utilizing distinct polarizations, multiple signals can occupy the same frequency band without
              causing
              cross-interference. This technique is particularly beneficial in bands like C-band and Ku-band,
              where
              polarization diversity can enhance capacity and efficiency.</p>
          </div>
          <div className="card">
            <h3>Frequency Division</h3>
            <p>Frequency Division Multiple Access (FDMA) allows multiple satellites to operate on different
              frequencies
              within the same band. This technique helps in managing bandwidth and reducing the likelihood of
              interference. The International Telecommunication Union (ITU) plays a vital role in coordinating
              frequency
              allocations to ensure that satellite operators comply with international regulations.</p>
          </div>
        </div>
        <div className="card-lower">
          <h3>Impact of Satellite Constellations</h3>
          <p>The emergence of large satellite constellations, such as SpaceX's Starlink, poses new challenges for
            interference management. These constellations consist of thousands of satellites operating in Low Earth
            Orbit (LEO), increasing the potential for both intentional and unintentional electromagnetic interference.
          </p>

          <ul>
            <li><strong>Interference with Radio Astronomy:</strong> Recent studies have shown that emissions from
              Starlink satellites can interfere with radio astronomy by generating noise at low frequencies, which is
              particularly concerning for sensitive astronomical observations.</li>
            <li><strong>Cumulative Impact on Radio Observations:</strong> Astronomers have raised alarms about the
              cumulative impact of multiple constellations on radio observations, emphasizing the need for coordination
              between satellite operators and scientific communities.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section className='section'>
    <div className='slides slide4'>
      <div className="container3">
        <div className="card-upper-container3">
          <h2>Interference Mitigation with Terrestrial Communication Systems</h2>
          <p>Satellites must effectively manage interference with terrestrial communication systems, especially as
            frequency bands overlap. This overlap can lead to significant co-channel interference, which impacts the
            performance of both satellite and terrestrial networks.</p>
        </div>
        <div className="card-containe3">
          <div className="card3">
            <h3>Strategies to Avoid Interference =&gt;</h3>
          </div>

          <div className="card3-1">
            <p>Regulatory bodies like the ITU allocate frequencies to minimize overlap between satellite and terrestrial
              systems.</p>
          </div>
          <div className="card3-1">
            <p>Satellites adjust their transmission power based on the strength of received signals from terrestrial
              networks, reducing potential interference.</p>
          </div>
          <div className="card3-1">
            <p>Some satellites use cognitive radio techniques to sense and adjust their frequency usage in real-time,
              avoiding active terrestrial signals.</p>
          </div>
          <div className="card3">
            <p><b>Allows satellites to adjust modulation schemes based on signal quality.</b></p>
          </div>
        </div>

        <div className="card-containe3">
          <div className="card3">
            <h3>Technologies for Interference Mitigation =&gt;</h3>
          </div>
          <div className="card3-2">
            <p>Used at ground stations to block unwanted frequencies, ensuring only desired signals are processed.</p>
          </div>
          <div className="card3-2">
            <p>Frequency ranges that separate different channels, reducing the likelihood of adjacent channel
              interference.</p>
          </div>
          <div className="card3-2">
            <p>Continuous monitoring helps detect interference sources and assess their impact on satellite
              communications.</p>
          </div>
          <div className="card3">
            <p><b>Tools and techniques to reduce unwanted signals.</b></p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section className="section">
    <div className="slides slide5">
      <div className="container4">
        <h2 className="heading-container4">Real-World Examples of Interference Problems and Solutions</h2>
        <div className="columns-container4">
          <div className="column">
            <h3>5G Interference with C-band Satellite Communications</h3>
            <div className="content">
              <button className="toggle-button" onClick={toggleContentFirst}>
                {showFirstIssue ? 'Show Resolution' : 'Show Issue'}
              </button>
              {showFirstIssue ? (
              <p className="issue-container4">
                <b>Issue:</b> The rollout of 5G networks, particularly in the C-band (3.7-4.2 GHz), has raised
                significant concerns about interference with existing satellite communications. Satellite operators,
                including SpaceX's Starlink, have reported that high-power 5G signals could disrupt their downlink
                services, leading to degraded performance or total service outages.
              </p>
              ) : (
              <p className="resolution-container4">
                <b>Resolution:</b> To address these concerns, the Federal Communications Commission (FCC) implemented
                regulatory measures such as establishing guard bands between the 5G frequencies and satellite
                communication bands. Additionally, the FCC required 5G operators to adhere to strict emission limits to
                mitigate interference risks. Ongoing studies are assessing the coexistence of 5G and satellite services
                to ensure both can operate effectively without significant disruption.
              </p>
              )}
            </div>
          </div>
          <div className="column">
            <h3>Starlink and 12 GHz Band Conflicts</h3>
            <div className="content">
              <button className="toggle-button" onClick={toggleContentSecond}>
                {showSecondIssue ? 'Show Resolution' : 'Show Issue'}
              </button>
              {showSecondIssue ? (
              <p className="issue-container4">
                <b>Issue:</b> Starlink's use of the 12 GHz frequency band for its satellite services has led to disputes
                with terrestrial mobile operators seeking to utilize the same spectrum for 5G services. Tests indicated
                that allowing high-power mobile services in this band could result in harmful interference to Starlink
                users, with potential service outages reported up to 74% of the time.
              </p>
              ) : (
              <p className="resolution-container4">
                <b>Resolution:</b> In response to these challenges, the FCC has granted Starlink permission to operate
                in the 12 GHz band under specific conditions while continuing to evaluate coexistence strategies. This
                includes ongoing discussions among stakeholders about technical solutions and regulatory frameworks that
                would enable both satellite and terrestrial systems to share the spectrum effectively without causing
                harmful interference.
              </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='section'>
  <div className='slides slide6'>
  <div className='container5'>
    

  </div>
  </div>
  </section>
</div>
</>
)

/*return (


<>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={()=> setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</>
)*/
}

export default App