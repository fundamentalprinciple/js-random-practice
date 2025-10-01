function dayCalc(s,e) {
    const start = s.split("-");
    const end = e.split("-");

    var years = Number(end[0]-start[0]);
    var months = Number(end[1]-start[1]);
    var days = Number(end[2]-start[2]);

    const T = 365*years + 30*months + days;

    console.log(start,end,years,months,days, T);
    return T;
}

dayCalc('2024-05-13', '2025-11-07');
