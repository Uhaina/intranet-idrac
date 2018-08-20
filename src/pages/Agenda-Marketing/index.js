import React from 'react';
import { agendaMarketing } from "services/agenda-marketing";

import 'fullcalendar/dist/locale/fr.js';
import FullCalendar from 'fullcalendar-reactwrapper';

class AgendaMarketing extends React.Component {
  render = () => {
    return (
      <div className="agenda-semaine-component">
        <FullCalendar
          id = "your-custom-ID"
          locale={'fr'}
          minTime={"08:00:00"}
          maxTime={"19:00:00"}
          height={500}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          slotEventOverlap={true}
          selectOverlap={false}
          slotLabelFormat={'H:mm'}
          timeFormat={'H:mm'}
          allDayText={'Today'}
          firstDay={1}
          weekends={false}
          eventLimit={true} // allow "more" link when too many events
          events={agendaMarketing}
          eventClick={ function(event) { alert(event.description) } }
          defaultView={'agendaWeek'}
        />
      </div>
    );
  }
}

export default AgendaMarketing;