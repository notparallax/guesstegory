import os
import json

def directoryPath(directory):
    elements = directory.split('/')
    path = '/' + elements[1] + '/' + elements[2] + '/'
    return path    
    
# Function to get all filenames in a directory
def get_file_names(directory, extensions=None):
    """
    Get the names of all files in the directory with optional filtering by extensions.
    
    :param directory: Directory to scan for files
    :param extensions: List of file extensions to include (e.g., ['.jpg', '.png']). 
                       If None, all files are included.
    :return: List of filenames
    """
    file_names = []
    
    # Scan the directory
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)
        
        # Check if it's a file (not a directory)
        if os.path.isfile(file_path):
            # If extensions are provided, filter by extension
            if extensions:
                if any(file.lower().endswith(ext) for ext in extensions):
                    directoryPathValue = directoryPath(directory)
                    path = directoryPathValue + file
                    for ext in extensions:
                        name = file.replace(ext, '')
                    
                    file_names.append({"name": name, "path": path})
                    
            # else:
            #     file_names.append(file)
    
    return file_names

# Function to save the list of filenames to a JSON file
def save_to_json(data, output_file):
    """
    Save data to a JSON file.
    
    :param data: Data to save
    :param output_file: Path to the output JSON file
    """
    with open(output_file, 'w') as json_file:
        json.dump(data, json_file, indent=4)
    print(f"Data saved to {output_file}")

# Main function to scan a directory and save file names to a JSON file
def main():
    # Directory to scan (you can change this to the directory you want)
    directory = 'public/images/outlines'  # Change this to your target directory

    # Output JSON file
    output_file = 'country_outline_path_and_name.json'

    # Optionally filter by extensions (e.g., only image files)
    extensions = ['.jpg', '.jpeg', '.png']  # Add more extensions if needed

    # Get the list of filenames
    file_names = get_file_names(directory, extensions)

    # Save the list to a JSON file
    save_to_json(file_names, output_file)

if __name__ == "__main__":
    main()