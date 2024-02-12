import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [table, setTable] = useState('Window');
  const [occasion, setOccasion] = useState('Casual');
  const [availableTimes] = useState([
    '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
  ]);

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationVisible(true);

// Reset form 
  setDate('');
  setTime('');
  setGuests(1);
  setTable('Window');
  setOccasion('Casual');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="time">Time:</label>
        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input type="number" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

        <label htmlFor="Table Type">Table Choice:</label>
        <select id="TableType" name="Table Type" value={table} onChange={(e) => setTable(e.target.value)}>
          <option value="Window Table">Window Table</option>
          <option value="Booth Table">Booth Table</option>
          <option value="FamilyTable">Family Table</option>
        </select>

        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Casual">Casual</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="Family Gathering">Family Gathering</option>
        </select>

        <button type="submit">Submit reservation</button>
      </form>

      {confirmationVisible && (
        <h4>Welcome to Little Lemon and thank you for your reservation!</h4>
      )}
    </div>
  );
}

export default BookingForm;