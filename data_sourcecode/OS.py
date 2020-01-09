import os
import json

config = "sh"

name_fileraw = ("C:\\Users\\Charlie\\Desktop\\OS\\gdb_output.txt")
name_outfile = ("C:\\Users\\Charlie\\Desktop\\OS\\OS-{}.json".format(config))
name_midoutfile = ("C:\\Users\\Charlie\\Desktop\\OS\\OS-{}.txt".format(config))
name_infile = ("C:\\Users\\Charlie\\Desktop\\OS\\mid-{}.txt".format(config))

def midgene(arr, name_midoutfile):
    if os.path.exists(name_midoutfile):
        os.remove(name_midoutfile)
    output = open(name_midoutfile, 'x')
    for i in range(len(arr)):
        output.write(arr[i])
        output.write('\n')
    output.close()

def predo(name_fileraw):
    mainarray = []
    line = ""
    fd = open(name_infile, "r")
    num_begin = 0
    num_repeat1 = 0
    num_repeat2 = 0
    screen = 1
    line = fd.readline()
    main_para = []
    mm_para = []
    inode_para
    sub_para = []
    while line:
        if line == 'exec.c-199':
            num_begin += 1
            if num_begin == 4:
                line = fd.readline()
                main_para.append(line.strip('=')[3])
        if line == 'exec.c-212':
            if num_begin == 4:
                line = fd.readline()
                main_para.append(line.strip('=')[3])
                line = fd.readline()
                main_para.append(line.strip('=')[3])
                mainarray.append(1)
                mainarray.append(screen)
                for i in range(len(main_para)):
                    mainarray.append(main_para[i])
                    mainarray.append(sub_para[i])
                mainarray.append("ÇëÌí¼Ó×¢ÊÍ")
        if line == 'exec.c-226':
            num_repeat1 += 1
            if num_begin == 6:
                line = fd.readline()
                mn_para.append(line.strip('=')[3])
                line = fd.readline()
                mn_para.append(line.strip('=')[2])
                for i in range(2):
                    line = fd.readline()
                inode_para.append(line.strip('=')[2])
                line = fd.readline()
                main_para.append(line.strip('=')[3])
        if line == 'exec.c-310':
            num_repeat1 += 1
            if num_repeat1 == 3:
                line = fd.readline()
                main_para.append(line.strip('=')[3])
        if line == 'exec.c-146':
            num_repeat2 += 1
            if num_repeat2 == 17:
                line = fd.readline()
                main_para.append(line.strip('=')[3])
        if line == 'exec.c-345':
            num_begin += 1
            if num_begin == 4:
                line = fd.readline()
                main_para.append(line.strip('=')[3])
        line = fd.readline()
    fd.close()

if os.path.exists(name_outfile):
    os.remove(name_outfile)
output = open(name_outfile, 'x')
json_main = []
key = ['type_animation',
       'background_animation',
       'var_num',
       'var_array',
       'var_value',
       'operation_num',
       'operation_array',
       'instruction']

if 1==1:
    fd = open(name_infile, "r")
    line = fd.readline()
    num = 0
    total = 0
    while line:
        total +=1
        json_now = {}
        #0
        json_now[key[0]] = int(line)
        print('{}: {}'.format(total,int(line)))
        line = fd.readline()
        #1
        json_now[key[1]] = int(line)
        line = fd.readline()
        #2
        json_now[key[2]] = int(line)
        num = int(line)
        line = fd.readline()
        #3-1
        array_now = []
        for i in range(num):
            array_now.append(line.split('\n')[0])
            line = fd.readline()
        json_now[key[3]] = array_now
        #3-2
        array_now = []
        for i in range(num):
            array_now.append(line.split('\n')[0])
            line = fd.readline()
        json_now[key[4]] = array_now
        #4
        array_now = []
        json_now[key[5]] = int(line)
        num = int(line)
        line = fd.readline()
        #5
        array_now = []
        for i in range(num):
            array_now.append(line.split('\n')[0])
            line = fd.readline()
        json_now[key[6]] = array_now
        #6
        json_now[key[7]] = line
        line = fd.readline()
        #main
        json_main.append(json_now)
        line = fd.readline()
    fd.close()

output.write(json.dumps(json_main, indent=4))
output.close()

