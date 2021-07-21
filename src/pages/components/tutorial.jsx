import React from 'react';
import 'antd/dist/antd.css';
import './tutorial.css';
import { Card, Col, Row } from 'antd';
import { DiGithubBadge, DiFirefox } from 'react-icons/di';

const { Meta } = Card;

function Tutorials({ projectData }) {
  return (
    <div className='card-setting'>
      {projectData.map((project) => {
        const { name, description, image, github, livelink } = project;
        return (
          <div className='site-card-wrapper' key={name}>
            <Row gutter={3}>
              <Col span={3}>
                <Card
                  className='Card'
                  style={{ width: 300 }}
                  hoverable={true}
                  cover={
                    <img alt={name} src={image} style={{ height: '20px' }} />
                  }
                  actions={[
                    <a href={github}>
                      <DiGithubBadge size={25} key='setting' />
                    </a>,
                    <a href={livelink}>
                      <DiFirefox key='edit' size={25} />
                    </a>,
                  ]}
                >
                  <Meta title={name} description={description} />
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default Tutorials;
