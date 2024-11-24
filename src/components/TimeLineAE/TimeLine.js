import "./TimeLine.scss"
const TimeLine = () => {
    return(
        <>
        <h2 className="about-title">My Resume</h2>
        <div className="timeline">
            <div className="timeline-row">
                <div className="timeline-column">
                    <h2 className="title">Education<span className="animate" style={{ '--i': 1 }}></span></h2>
                    <div className="timeline-box">
                        <div className="timeline-content">
                            <div className="content">
                                <div className="year"><i class='bx bxs-calendar'></i>2021 - 2022</div>
                                <h3>High School Degree</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ooptio voluptate natus consectetur suscipit aspernatur quó obcaecati dolore veniam debitis omnis.</p>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <div className="content">
                                <div className="year"><i class='bx bxs-calendar'></i>2022 - 2023</div>
                                <h3>Bachelor Degree</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ooptio voluptate natus consectetur suscipit aspernatur quó obcaecati dolore veniam debitis omnis.</p>
                            </div>
                        </div>
                        <span className="animate" style={{ '--i': 2 }}></span>
                    </div>
                </div>
                <div className="timeline-column">
                    <h2 className="title">Experience<span className="animate" style={{ '--i': 3 }}></span></h2>
                    <div className="timeline-box">
                        <div className="timeline-content">
                            <div className="content">
                                <div className="year"><i class='bx bxs-calendar'></i>2021 - 2022</div>
                                <h3>High School Degree</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ooptio voluptate natus consectetur suscipit aspernatur quó obcaecati dolore veniam debitis omnis.</p>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <div className="content">
                                <div className="year"><i class='bx bxs-calendar'></i>2022 - 2023</div>
                                <h3>Bachelor Degree</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ooptio voluptate natus consectetur suscipit aspernatur quó obcaecati dolore veniam debitis omnis.</p>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <div className="content">
                                <div className="year"><i class='bx bxs-calendar'></i>2023 - 2024</div>
                                <h3>Master Degree</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ooptio voluptate natus consectetur suscipit aspernatur quó obcaecati dolore veniam debitis omnis.</p>
                            </div>
                        </div>
                        <span className="animate" style={{ '--i': 4 }}></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TimeLine;

