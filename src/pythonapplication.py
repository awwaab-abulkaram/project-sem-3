'''1. Take the path from the user
2.Check its extension
3.it should be a pdf
4.if not then throw an exception
5. if it is a pdf check the size the size should be less than 1 mb
6.if size is greater throw an exception
7. create a copy for this file and name it as copy.pdf
'''
import os
import shutil

def validate_pdf(file_path):
    if not file_path.lower().endswith('.pdf'):
        raise ValueError("Invalid file format. Please provide a PDF file.")
    file_size = os.path.getsize(file_path)
    if file_size > 1024 * 1024:
        raise ValueError("File size exceeds 1 MB. Please provide a smaller PDF file.")
    copy_path = os.path.join(os.path.dirname(file_path), 'copy.pdf')
    shutil.copyfile(file_path, copy_path)

    print(f"Validation successful. Copy created at {copy_path}")
user_input = input("Enter the path to the PDF file: ")

try:
    validate_pdf(user_input)
except ValueError as e:
    print(f"Validation failed: {e}")
