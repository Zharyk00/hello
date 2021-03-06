import React, { Fragment } from "react";
import { motion } from "framer-motion";
import "../../Styles/Skills/Skills.css";
import { skills, tools } from "../../Data/Datas";
function Skills() {

  return (
    <motion.div className="main-skills">
      <motion.div className="languages">
        <div className="title">Languages I speak</div>
        {skills.map((item) => (
          <Fragment key={item.id} >
            <div className="icons" style={{ color: item.color }}>{item.languge}</div>
            <motion.div className="lines">
              <motion.div
                className="lines__color"
                initial={{ width: item.initial }}
                animate={{
                  width: item.percent, backgroundColor: item.color,
                  transition: { type: "tween", duration: 2, ease: "easeOut", delay: item.id, }
                }}
              ></motion.div>
            </motion.div>
          </Fragment>
        ))}
      </motion.div>
      <motion.div className="tools">
        {tools.map(item => (
          <motion.div key={item.id} className="tools__items">
            <span style={{ color: "#4f7afe" }}>{item.languge}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="exper">Experienced with: <span className="experienced">Nodejs,</span>
        <span className="experienced">Expressjs,</span>
        <span className="experienced">MongoDB</span></div>
    </motion.div>
  );
}

export default Skills;




