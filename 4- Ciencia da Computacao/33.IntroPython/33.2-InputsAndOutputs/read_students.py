rec_students = []
with open("students.txt", mode="r") as file:
    for line in file:
      student_grades = line.split(" ")
      if int( student_grades[1]) < 6:
          rec_students.append(f"{student_grades[0]}\n")

with open("rec_students.txt", mode="w") as rec_file:
    for line in rec_students:
      rec_file.write(line)
      print(line)