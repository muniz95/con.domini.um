import React from 'react';
import User from '../../models/User';

export default (user: User) => (
  <form>
    <div>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" id="name" value={user.name} />
    </div>
    <div>
      <label htmlFor="lastname">Sobrenome</label>
      <input type="text" name="lastname" id="lastname" />
    </div>
    <div>
      <label htmlFor="rg">RG</label>
      <input type="text" name="rg" id="rg" />
    </div>
    <div>
      <label htmlFor="mobility-restriction">Restrição de mobilidade?</label>
      <input type="radio" name="mobility-restriction" id="yes" value="0" />
      <label htmlFor="yes">Sim</label>
      <input type="radio" name="mobility-restriction" id="no" value="1" />
      <label htmlFor="no">Não</label>
    </div>
    <div>
      <label htmlFor="birthdate">Data de nascimento</label>
      <input type="text" name="birthdate" id="birthdate" />
    </div>
    <div>
      <label htmlFor="gender">Gênero</label>
      <select name="gender" id="gender">
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="other">Outros</option>
      </select>
    </div>
    <div>
      <label htmlFor="martial-status">Estado civil</label>
      <select name="martial-status" id="martial-status">
        <option value="sigle">Solteiro</option>
        <option value="married">Casado</option>
        <option value="divorced">Divorciado</option>
        <option value="widow">Viúvo</option>
        <option value="stable-union">União estável</option>
      </select>
    </div>
    <div>
      <label htmlFor="visibility">Visibilidade</label>
      <input type="radio" name="visibility" id="private" value="0" />
      <label htmlFor="visibility">Privado</label>
      <input type="radio" name="visibility" id="public" value="1" />
      <label htmlFor="visibility">Público</label>
    </div>
    <button type="submit">Salvar</button>
    <button type="reset">Limpar</button>
  </form>
);
