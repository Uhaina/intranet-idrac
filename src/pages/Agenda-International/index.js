import React from 'react';
import { agendaInternational } from "services/agenda-international";

import 'fullcalendar/dist/locale/fr.js';
import FullCalendar from 'fullcalendar-reactwrapper';

class AgendaInternational extends React.Component {
  render = () => {
    return (
      <div className="agenda-semaine-component">
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
          aspectRatio={2.55}
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
          events={agendaInternational}
          eventClick={ function(event) { alert(event.description) } }
          defaultView={'agendaWeek'}
        />
      </div>
    );
  }
}

export default AgendaInternational;