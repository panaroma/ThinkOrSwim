# SWINGALERT
# WGRIFFITH2 (C) 2014

# ROLLINGTRAILINGSTOP
DEF PERIODS = 3;
DEF LONGSTOP = CLOSE < LOWEST(DATA = LOW(), LENGTH = PERIODS)[1];
DEF SHORTSTOP = CLOSE > LOWEST(DATA = LOW(), LENGTH = PERIODS)[1];

PLOT STOPLOSS = LONGSTOP;
#PLOT STOPLOSS = SHORTSTOP;