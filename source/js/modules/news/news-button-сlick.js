const buttonGeneral = document.querySelector('.news__general');
const buttonVolunteer = document.querySelector('.news__volunteer');
const buttonInternships = document.querySelector('.news__internships');
const buttonCareer = document.querySelector('.news__career');
const buttonTrips = document.querySelector('.news__trips');

const listVolunteer = document.getElementById('volunteer');
const listInternships = document.getElementById('internships');
const listCareer = document.getElementById('career');
const listTrips = document.getElementById('trips');

const newsButtonClick = () => {
  buttonGeneral.addEventListener('click', function () {
    buttonGeneral.classList.add('is-active');
    buttonVolunteer.classList.remove('is-active');
    buttonInternships.classList.remove('is-active');
    buttonCareer.classList.remove('is-active');
    buttonTrips.classList.remove('is-active');

    listVolunteer.classList.remove('visually-hidden');
    listInternships.classList.remove('visually-hidden');
    listCareer.classList.remove('visually-hidden');
    listTrips.classList.remove('visually-hidden');
  });
  buttonVolunteer.addEventListener('click', function () {
    buttonGeneral.classList.remove('is-active');
    buttonVolunteer.classList.add('is-active');
    buttonInternships.classList.remove('is-active');
    buttonCareer.classList.remove('is-active');
    buttonTrips.classList.remove('is-active');

    listVolunteer.classList.remove('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonInternships.addEventListener('click', function () {
    buttonGeneral.classList.remove('is-active');
    buttonVolunteer.classList.remove('is-active');
    buttonInternships.classList.add('is-active');
    buttonCareer.classList.remove('is-active');
    buttonTrips.classList.remove('is-active');

    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.remove('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonCareer.addEventListener('click', function () {
    buttonGeneral.classList.remove('is-active');
    buttonVolunteer.classList.remove('is-active');
    buttonInternships.classList.remove('is-active');
    buttonCareer.classList.add('is-active');
    buttonTrips.classList.remove('is-active');

    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.remove('visually-hidden');
    listTrips.classList.add('visually-hidden');
  });
  buttonTrips.addEventListener('click', function () {
    buttonGeneral.classList.remove('is-active');
    buttonVolunteer.classList.remove('is-active');
    buttonInternships.classList.remove('is-active');
    buttonCareer.classList.remove('is-active');
    buttonTrips.classList.add('is-active');

    listVolunteer.classList.add('visually-hidden');
    listInternships.classList.add('visually-hidden');
    listCareer.classList.add('visually-hidden');
    listTrips.classList.remove('visually-hidden');
  });
};

export {newsButtonClick};
