import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../utils";


const ExperienceCard = ( { experience } ) => {
    return (
        <VerticalTimelineElement
            contentStyle={ {
                background: "#1d1836",
                color: "secondary",
            } }
            contentArrowStyle={ { borderRight: "7px solid  #232631" } }
            date={ experience.date }
            iconStyle={ { background: experience.iconBg } }
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={ experience.icon }
                        alt={ experience.company_name }
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{ experience.title }</h3>
                <a href={ experience.link } className='text-[16px] text-[#915EFF] font-semibold'
                    style={ { margin: 0 } }
                >
                    Github repository
                </a>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                { experience.points.map( ( point, index ) => (
                    <li
                        key={ `experience-point-${ index }` }
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        { point }
                    </li>
                ) ) }
            </ul>
        </VerticalTimelineElement>
    );
};

const Projects = () => {
    return (
        <>
            <div>
                <p className={ `${ styles.sectionSubText } text-center` }>
                    What I have done so far
                </p>
                <h2 className={ `${ styles.sectionHeadText } text-center` }>
                    Work Experience.
                </h2>
            </div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline lineColor="#151030">
                    { experiences.map( ( experience, index ) => (
                        <ExperienceCard
                            key={ `experience-${ index }` }
                            experience={ experience }
                        />
                    ) ) }
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper( Projects, "projects" );