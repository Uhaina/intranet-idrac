import React from 'react';
import './styles.scss';

import 'fullcalendar/dist/locale/fr.js';
import FullCalendar from 'fullcalendar-reactwrapper';

import { agendaRendu } from 'services/agenda-rendu';

class Rendu extends React.Component {
  render() {
    return (
      <div className="page-rendu-component">
        <FullCalendar
          id = "your-custom-ID"
          header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          locale={'fr'}
          minTime={"08:00:00"}
          maxTime={"19:00:00"}
          aspectRatio={3}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          slotEventOverlap={true}
          selectOverlap={false}
          slotLabelFormat={'H:mm'}
          timeFormat={'H:mm'}
          allDayText={'Today'}
          firstDay={1}
          weekends={false}
          titleFormat={"MMMM D YYYY"}
          eventLimit={true} // allow "more" link when too many events
          events={agendaRendu}
          eventClick={ function(event) { alert(event.description) } }
          defaultView={'listMonth'}
        />
      </div>
    );
  }
}

export default Rendu;