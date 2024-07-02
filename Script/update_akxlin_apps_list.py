import os
import yaml

def read_data_yml(file_path):
    with open(file_path, 'r') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)
    return data

def write_data_to_md(data, md_file):
    with open(md_file, 'w') as f:
        f.write('---\naside: false\n---\n\n')
        f.write('|应用|图标|描述|类型|\n')
        f.write('|:---:|:---:|:---:|:---:|:---:|\n')
        for app in data:
            f.write(f'|[{app.get("name", "")}]({app.get("additionalProperties", {}).get("website", "")})|<img src="{app.get("logo", "")}" alt="logo" width="50px">|{app.get("description", "")}|{app.get("type", "")}|\n')

def main():
    apps_dir = 'appstore/apps'
    md_file = '1Panel-sigs/1panel-wiki/src/thirdStores/okxlin/app_list.md'
    data = []
    for app in os.listdir(apps_dir):
        app_dir = os.path.join(apps_dir, app)
        if os.path.isdir(app_dir):
            data_yml = os.path.join(app_dir, 'data.yml')
            if os.path.exists(data_yml):
                app_data = read_data_yml(data_yml)
                app_data['logo'] = f'https://cdn.jsdelivr.net/gh/okxlin/appstore@localApps/{app_dir}/logo.png'
                data.append(app_data)
    write_data_to_md(data, md_file)

if __name__ == '__main__':
    os.system('git clone https://github.com/okxlin/appstore.git')
    os.system('git chone git@github.com:1Panel-sigs/1panel-wiki.git')
    main()