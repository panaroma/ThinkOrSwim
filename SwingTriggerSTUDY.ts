# SWINGTRIGGER
# WGRIFFITH2 (C) 2014

DECLARE UPPER;

INPUT KPERIOD = 14;
INPUT DPERIOD = 3;

# STOCHASTICSLOW
DEF FASTLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "K PERIOD" = KPERIOD);
DEF SLOWLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "K PERIOD" = KPERIOD).SLOWD;

DEF LONG =
CLOSE > HIGHEST(HIGH, 2)[1]
AND FASTLINE >= SLOWLINE
AND LOWEST(FASTLINE, 2)[1] <= 20;

DEF SHORT =
CLOSE < LOWEST(LOW, 2)[1]
AND FASTLINE < SLOWLINE
AND HIGHEST(FASTLINE, 2)[1] >= 80;

PLOT BULL = LONG;
PLOT BEAR = SHORT;

PLOT RATING =
IF LONG THEN FASTLINE-FASTLINE[1]
ELSE IF SHORT THEN FASTLINE-FASTLINE[1]
ELSE 0;

BULL.SETDEFAULTCOLOR(CREATECOLOR(0, 255, 0));
BULL.SETPAINTINGSTRATEGY(PAINTINGSTRATEGY.BOOLEAN_ARROW_UP);
BEAR.SETDEFAULTCOLOR(CREATECOLOR(255, 0, 0));
BEAR.SETPAINTINGSTRATEGY(PAINTINGSTRATEGY.BOOLEAN_ARROW_DOWN);
RATING.Hide();
RATING.HideBubble();
