def out_filename(input_file_name:str, input_type:str, output_type:str)-> str:
    return f'{input_file_name[0:-len(input_type)]}{output_type}'