import csv

def make_stims(stim_csv, output_directory):

    stim_string = "let critical_items = [\n"


    with open(stim_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            stim_string += "{index: " + line[0] + ", code: " + line[1] + ", type: 'audio-keyboard-response', stimulus: '" + line[5] + "', choices: ['s', 'k'], prompt: '<img src=\""
            stim_string += line[6] + "\">', post_trial_gap: 1000, response_allowed_while_playing: false"
            stim_string+= " }, \n"

    stim_string = stim_string[:-3] + "]"
    
    stims_file = open(output_directory + "stims.js",'w')
    stims_file.write(stim_string)
    stims_file.close()




c = "/Users/willclapp/Desktop/200A/trials.csv"
out = "/Users/willclapp/Desktop/200A/"

make_stims(c, out)