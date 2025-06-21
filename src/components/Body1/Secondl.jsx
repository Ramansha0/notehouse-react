import React from 'react'
import '../../utils/subject.css';
const Secondl = () => {
  return (
    <div>
    <div className="contain">
    
      <h1 className='topper' >Make sure you visited here too!</h1>

      <div
        className="ending"
        style={{
          height: '450px',
          background: 'linear-gradient(130deg, white 60%, #71b6ff 40%)',
        }}
      >
        <h1 style={{ marginTop: '0px' }}>Other Subject Notes:</h1>
        <div className="twoside" style={{ display: 'flex' }}>
          <div className="left">
            <div
              style={{ width: '450px', height: '135px', marginTop: '30px' }}
             id="boxes3" className="boxes3"
            >
              <p className='paru1'
                style={{
                  fontSize: '25px',
                  fontWeight: '600',
                  marginLeft: '30px',
                  paddingTop: '10px',
                }}
              >
                NEB CLASS - XI{' '}   </p>
                <p className='paru2'
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginTop: '-20px',
                    marginLeft: '30px',
                  }}
                >
                  Revised Physics Notes
                </p>
        
              <p className='paru3'
                style={{
                  fontSize: '14px',
                  marginLeft: '30px',
                  paddingRight: '20px',
                  marginTop: '-17px',
                }}
              >
                Here you can find almost every revised notes of chemistry . All
                the summary and the short notes of the chapters ....
              </p>
              <p className='paru4' style={{ fontSize: '9px', marginLeft: '30px', marginTop: '-4px' }}>
                Batch - 2081
              </p>
            </div>
                  <div
              style={{ width: '450px', height: '135px', marginTop: '30px' }}
              className="boxes3"
            >
              <p className='paru1'
                style={{
                  fontSize: '25px',
                  fontWeight: '600',
                  marginLeft: '30px',
                  paddingTop: '10px',
                }}
              >
                NEB CLASS - XI{' '}   </p>
                <p className='paru2'
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginTop: '-20px',
                    marginLeft: '30px',
                  }}
                >
                  Revised Nepali Notes
                </p>
        
              <p className='paru3'
                style={{
                  fontSize: '14px',
                  marginLeft: '30px',
                  paddingRight: '20px',
                  marginTop: '-17px',
                }}
              >
                Here you can find almost every revised notes of chemistry . All
                the summary and the short notes of the chapters ....
              </p>
              <p className='paru4' style={{ fontSize: '9px', marginLeft: '30px', marginTop: '-4px' }}>
                Batch - 2081
              </p>
            </div>
          </div>
          <div className="right">
            <div
              style={{
                width: '450px',
                height: '135px',
                marginTop: '100px',
                marginLeft: '70px',
              }}
              className="boxes3" id='boxes4'
            >
              <p
                style={{
                  fontSize: '25px',
                  fontWeight: '600',
                  marginLeft: '30px',
                  paddingTop: '10px',
                }}
              >
                NEB CLASS - XI{' '}</p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginTop: '-20px',
                    marginLeft: '30px',
                  }}
                >
                  Revised English Notes
                </p>
            
              <p
                style={{
                  fontSize: '14px',
                  marginLeft: '30px',
                  paddingRight: '20px',
                  marginTop: '-17px',
                }}
              >
                Here you can find almost every revised notes of chemistry . All
                the summary and the short notes of the chapters ....
              </p>
              <p style={{ fontSize: '9px', marginLeft: '30px', marginTop: '-4px' }}>
                Batch - 2081
              </p>
            </div>
          </div>
        </div>
      </div>
  
    </div></div>
  )
}

export default Secondl
