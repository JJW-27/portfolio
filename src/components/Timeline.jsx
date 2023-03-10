import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiJavascript as JavaScript } from 'react-icons/si';
import { FaChessBishop as Bishop } from 'react-icons/fa';
import { BsCalculator as Calculator } from 'react-icons/bs';
import { ImLeaf as Leaf } from 'react-icons/im';
import { BsThreeDots as Dots } from 'react-icons/bs';

const Timeline = () => {
  return (
    <VerticalTimeline lineColor="#7e9c9e">
      <VerticalTimelineElement
        className="start-bootcamp"
        contentStyle={{ background: 'rgb(255,255,255)', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
        date="3rd October 2022"
        iconStyle={{ background: '#323330', color: '#F0DB4F' }}
        icon={<JavaScript />}
      >
        <h3 className="vertical-timeline-element-title">
          Full Stack Software Developer in Training
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
        <p>Started 13-week software development bootcamp at Northcoders</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14th - 18th November 2022"
        iconStyle={{ background: '#ffe9c5', color: '#966F33' }}
        icon={<Bishop />}
      >
        <h3 className="vertical-timeline-element-title">Back-end project</h3>
        <p>
          Created a board games review database and API using pSQL, Node.js and
          Express.js
        </p>
        <p>
          <a target="_blank" href="https://real-rose-worm-kit.cyclic.app/">
            Hosted API
          </a>{' '}
          |{' '}
          <a
            target="_blank"
            href="https://github.com/JJW-27/nc-games-backend-project"
          >
            GitHub
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="24th November 2022"
        iconStyle={{ background: '#fff', color: 'rgb(0,0,0)' }}
        icon={<Calculator />}
      >
        <h3 className="vertical-timeline-element-title">
          First React Mini-project
        </h3>

        <p>Created a basic calculator</p>
        <p>
          <a target="_blank" href="https://jjw27-calculator.netlify.app/">
            Try it out
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="28th - 29th November 2022"
        iconStyle={{
          background:
            'linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 47%, rgba(83,0,0,1) 50%, rgba(255,255,255,1) 53%)',
        }}
        icon={''}
      >
        <h3 className="vertical-timeline-element-title">
          Data Visualisation React Mini-project
        </h3>
        <p>
          Created a Pokemon stat comparison tool utilising PokeAPI and (insert
          name of google graph tool)
        </p>
        <p>
          <a
            target="_blank"
            href="https://jjw27-pokemon-stats-comparison.netlify.app/"
          >
            Try it out
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="5th - 9th December 2022"
        iconStyle={{ background: '#ffe9c5', color: '#966F33' }}
        icon={<Bishop />}
      >
        <h3 className="vertical-timeline-element-title">Front-end Project</h3>
        <p>
          Created a board games review website to consume the previously-built
          API
        </p>
        <p>
          <a target="_blank" href="https://jjw-27-roundtable.netlify.app/">
            Hosted website
          </a>{' '}
          |{' '}
          <a
            target="_blank"
            href="https://github.com/JJW-27/nc-games-frontend-project"
          >
            GitHub
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={
          <div>
            <p>14th - 23rd December 2022</p>
            <p>3rd - 6th January 2023</p>
          </div>
        }
        iconStyle={{ background: '#729d84', color: '#fff' }}
        icon={<Leaf />}
      >
        <h3 className="vertical-timeline-element-title">
          Final Bootcamp Project
        </h3>

        <p>Created a houseplant companion app in React Native</p>
        <p><a target="_blank" href="https://youtu.be/9T_6O1HDiu8">
            Video demo
          </a>{' '}
          |{' '}
          <a
            target="_blank"
            href="https://github.com/fatfroggo/plantly-fe"
          >
            Github - front-end
          </a>{' '}
          |{' '}<a target="_blank" href="https://github.com/fatfroggo/plantly">
          Github - back-end
          </a>{' '}
          |{' '}
          <a
            target="_blank"
            href="https://plantly-api.onrender.com/api"
          >
            Hosted back-end
          </a></p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#fff', color: '' }}
        icon={<Dots />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
