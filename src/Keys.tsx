import { useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    let [id, setId] = useState(0);
    let [name, setName] = useState('');

    if (props.sorting === 'DESC') {
        props.initialData.sort((a, b) => b.id - a.id);
    } else {
        props.initialData.sort((a, b) => a.id - b.id);
    }

    return (
        <div>
            {props.initialData.map((user) =>
                user.id != id ? (
                    <div onClick={() => setId(user.id)} key={user.id}>
                        {user.name}
                    </div>
                ) : (
                    <input
                        autoFocus={true}
                        onChange={(e) => setName(e.currentTarget.value)}
                        key={user.id}
                        defaultValue={user.name}
                        onKeyDown={(e) => {
                            if (e.key == 'Escape') {
                                setId(0);
                            }
                            if (e.key == 'Enter') {
                                user.name = name;
                                setId(0);
                            }
                        }}
                    />
                ),
            )}
        </div>
    );
}
