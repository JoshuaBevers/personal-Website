import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {
  DiJsBadge,
  DiAws,
  DiMongodb,
  DiReact,
  DiHtml5,
  DiGithubBadge,
  DiFirefox,
} from 'react-icons/di';
import { BsExclamationDiamond } from 'react-icons/bs';
import '../complete.css';

function Projects({ projectData }) {
  const [index, setIndex] = useState(0);
  const data = projectData;

  function getTechImages(images) {
    const fontSize = 30;
    switch (images) {
      case 'node':
        return <DiJsBadge size={fontSize} key={images} />;
      case 'aws':
        return <DiAws size={fontSize} key={images} />;
      case 'mongo':
        return <DiMongodb size={fontSize} key={images} />;
      case 'react':
        return <DiReact size={fontSize} key={images} />;
      case 'html':
        return <DiHtml5 size={fontSize} key={images} />;
      default:
        return <BsExclamationDiamond size={35} key={images} />;
    }
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > data.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='section-center'>
      {data.map((project, projectIndex) => {
        const {
          name,
          description,
          image,
          title,
          techStack,
          github,
          livelink,
        } = project;

        let position = 'nextSlide';
        if (projectIndex === index) {
          position = 'activeSlide';
        }
        if (
          projectIndex === index - 1 ||
          (index === 0 && projectIndex === data.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key={projectIndex}>
            <img src={image} alt={name} className='project-img' />
            <h3>{name}</h3>
            <p className='title'>{title}</p>
            {techStack.map((tech) => {
              return getTechImages(tech);
            })}
            <p className='text'> {description}</p>
            <div>
              <a href={github}>
                <DiGithubBadge size={30} />
              </a>
              <a href={livelink}>
                <DiFirefox size={30} />
              </a>
            </div>
          </article>
        );
      })}
      <button
        className='prev'
        onClick={() =>
          setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > data.length - 1) {
              index = 0;
            }
            return index;
          })
        }
      >
        <FiChevronLeft />
      </button>
      <button
        className='next'
        onClick={() =>
          setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > data.length - 1) {
              index = 0;
            }
            return index;
          })
        }
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Projects;
