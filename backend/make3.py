import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv('make1.csv')

# Remove duplicate rows
df = df.drop_duplicates()

# Save the modified DataFrame back to a CSV file
df.to_csv('make2.csv', index=False)
