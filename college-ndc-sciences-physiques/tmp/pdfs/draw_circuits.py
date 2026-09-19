from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

out = Path('output/qcm-illustrations')
out.mkdir(parents=True, exist_ok=True)
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 30)
small = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 24)
ink = '#183247'

def make(kind):
    im = Image.new('RGB', (900, 540), 'white')
    d = ImageDraw.Draw(im)
    def line(points, fill=ink):
        d.line(points, fill=fill, width=5)
    def text(x,y,t):
        d.text((x,y),t,font=font,fill=ink,anchor='mm')
    def lamp(x,y,label):
        r=36
        d.ellipse((x-r,y-r,x+r,y+r),outline=ink,width=4)
        line([(x-25,y-25),(x+25,y+25)])
        line([(x-25,y+25),(x+25,y-25)])
        text(x,y-64,label)
    # Battery on the upper branch.
    line([(160,130),(432,130)])
    line([(468,130),(740,130)])
    line([(432,80),(432,180)])
    line([(468,100),(468,160)])
    text(408,85,'+')
    text(497,95,'−')
    text(450,35,'Pile')
    if kind == 'derivation':
        line([(160,130),(160,440),(414,440)])
        line([(486,440),(740,440),(740,130)])
        line([(160,280),(414,280)])
        line([(486,280),(740,280)])
        lamp(450,280,'L1')
        lamp(450,440,'L2')
        for x in [160,740]:
            d.ellipse((x-6,274,x+6,286),fill=ink)
    else:
        line([(160,130),(160,350),(284,350)])
        line([(356,350),(544,350)])
        line([(616,350),(740,350),(740,130)])
        lamp(320,350,'L1')
        lamp(580,350,'L2')
        if kind == 'fil_L2':
            line([(510,350),(510,450),(650,450),(650,350)], '#bf382b')
            for x in [510,650]:
                d.ellipse((x-6,344,x+6,356),fill='#bf382b')
            d.text((580,487),'Fil ajouté',font=small,fill='#bf382b',anchor='mm')
    im.save(out / (kind+'.png'))

for kind in ['serie','fil_L2','derivation']:
    make(kind)
