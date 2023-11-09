import "../ProgressBar/ProgressBar.css"
const ProgressBar = ()=>{
    return(
        <>
        <div className="col-lg-6">
          <div className="st-height-b0 st-height-lg-b30"></div>
          <div className="st-progressbar-wrap">
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">Photoshop</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">95%</div>
              </div>
              <div className="st-progressbar" data-progress="95">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
            <div className="st-height-b30 st-height-lg-b20"></div>
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">Motion Graphic</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">75%</div>
              </div>
              <div className="st-progressbar" data-progress="75">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
            <div className="st-height-b30 st-height-lg-b20"></div>
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">Adobe XD</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">90%</div>
              </div>
              <div className="st-progressbar" data-progress="90">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
            <div className="st-height-b30 st-height-lg-b20"></div>
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">UX Design</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">85%</div>
              </div>
              <div className="st-progressbar" data-progress="85">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
            <div className="st-height-b30 st-height-lg-b20"></div>
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">HTML</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">80%</div>
              </div>
              <div className="st-progressbar" data-progress="80">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
            <div className="st-height-b30 st-height-lg-b20"></div>
            <div className="st-single-progressbar">
              <div className="st-progressbar-heading">
                <h3 className="st-progressbar-title">Digital Marketing</h3>
                <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s"
                    data-wow-delay="0.5s">90%</div>
              </div>
              <div className="st-progressbar" data-progress="90">
                <div className="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default ProgressBar