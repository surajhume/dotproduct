namespace Key {
  export const enum Code {
    BACKSPACE = 8,
    TAB = 9,
    ENTER = 13,
    SHIFT = 16,
    CTRL = 17,
    ALT = 18,
    BREAK = 19,
    CAPSLOCK = 20,
    ESCAPE = 27,
    SPACE = 32,
    PAGEUP = 33,
    PAGEDOWN = 34,
    END = 35,
    HOME = 36,
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    INSERT = 45,
    DELETE = 46,
    ZERO = 48,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    QUESTION_MARK = 63,
    A = 65,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z
  }

  export const Name : { [index : number] : string } = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause',
    20: 'caps-lock',
    27: 'esc',
    32: 'space',
    33: 'pg-up',
    34: 'pg-down',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: 'semicolon',
    61: 'equals',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    93: 'context',
    96: 'num-0',
    97: 'num-1',
    98: 'num-2',
    99: 'num-3',
    100: 'num-4',
    101: 'num-5',
    102: 'num-6',
    103: 'num-7',
    104: 'num-8',
    105: 'num-9',
    106: 'num-multiply',
    107: 'num-plus',
    109: 'num-minus',
    110: 'num-period',
    111: 'num-division',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    186: 'semicolon',
    187: 'equals',
    189: 'dash',
    188: ',',
    190: '.',
    191: '/',
    192: '`',
    219: 'open-square-bracket',
    220: '\\',
    221: 'close-square-bracket',
    222: 'single-quote',
    224: 'win'
  }

  export const enum Map {
    FORWARD_THRUST = Code.UP,
    REVERSE_THRUST = Code.DOWN,
    ROTATE_LEFT = Code.LEFT,
    ROTATE_RIGHT = Code.RIGHT,

    FIRE_GUN = Code.SPACE,
    FIRE_BOMB = Code.F,
    FIRE_MINE = Code.V,
    FIRE_BURST = Code.G,
    FIRE_DECOY = Code.D,
    FIRE_REPEL = Code.R,

    TOGGLE_MULTIFIRE = Code.M,

    AFTERBURNER = Code.A
  }
}

export default Key;